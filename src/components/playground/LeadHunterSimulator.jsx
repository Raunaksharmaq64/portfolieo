import React, { useState, useEffect, useRef } from 'react';
import WorkflowTimeline from './WorkflowTimeline';
import SimulationResults from './SimulationResults';
import { leadHunterPresets, generateLeadHunterSimulation } from '../../data/simulatorScenarios';

const SIMULATION_STEPS = [
  { id: 'scout', title: '1. Geo-Scout', activeDesc: 'Querying SerpApi coordinates...' },
  { id: 'sample', title: '2. Business Data', activeDesc: 'Synthesizing business profile...' },
  { id: 'audit', title: '3. Website Audit', activeDesc: 'Testing SSL, mobile viewport & forms...' },
  { id: 'prioritize', title: '4. Prioritization', activeDesc: 'Scoring modernization urgency...' },
  { id: 'pitch', title: '5. LLM Pitch', activeDesc: 'Drafting tailored pitch via Gemini...' },
  { id: 'report', title: '6. Final Report', activeDesc: 'Generating verified report...' }
];

export default function LeadHunterSimulator() {
  const [businessType, setBusinessType] = useState('Dentist');
  const [city, setCity] = useState('Bhopal');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [results, setResults] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const timersRef = useRef([]);

  const clearAllTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };

  useEffect(() => {
    return () => clearAllTimers();
  }, []);

  const handleStartSimulation = (e) => {
    if (e) e.preventDefault();
    if (!businessType.trim() || !city.trim()) {
      setErrorMessage('Please provide both a business category and city.');
      return;
    }

    setErrorMessage('');
    clearAllTimers();
    setIsRunning(true);
    setResults(null);
    setCurrentStepIndex(0);

    // Deterministic state machine sequence with responsive pacing
    const stepDelays = [400, 450, 500, 450, 500, 300];
    let accumulatedTime = 0;

    stepDelays.forEach((delay, idx) => {
      accumulatedTime += delay;
      const t = setTimeout(() => {
        setCurrentStepIndex(idx + 1);
        if (idx === stepDelays.length - 1) {
          setIsRunning(false);
          const generated = generateLeadHunterSimulation(businessType, city);
          setResults(generated);
        }
      }, accumulatedTime);
      timersRef.current.push(t);
    });
  };

  const handleReset = () => {
    clearAllTimers();
    setIsRunning(false);
    setCurrentStepIndex(0);
    setResults(null);
    setErrorMessage('');
  };

  const handleApplyPreset = (preset) => {
    if (isRunning) return;
    setBusinessType(preset.business);
    setCity(preset.city);
    setErrorMessage('');
  };

  return (
    <div className="simulator-card leadhunter-simulator" id="leadhunter-simulator-widget">
      <div className="simulator-header">
        <div className="sim-title-group">
          <span className="sim-tag"><i className="fas fa-crosshairs"></i> Module 1</span>
          <h3>LeadHunter Discovery &amp; Audit Simulator</h3>
          <p>Test the automated pipeline: geographic scouting &rarr; technical diagnostics &rarr; context-aware cold pitch generation.</p>
        </div>
        <div className="sim-badge-safe">
          <i className="fas fa-shield-alt"></i> Safe In-Browser Demo
        </div>
      </div>

      {/* Input Configuration Panel */}
      <div className="simulator-controls-panel">
        <form onSubmit={handleStartSimulation} className="sim-form-grid">
          <div className="sim-input-group">
            <label htmlFor="sim-business-input">
              <i className="fas fa-briefcase"></i> Target Business Category
            </label>
            <input
              type="text"
              id="sim-business-input"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              placeholder="e.g. Dentist, Roofer, Cafe..."
              disabled={isRunning}
              maxLength={40}
            />
          </div>

          <div className="sim-input-group">
            <label htmlFor="sim-city-input">
              <i className="fas fa-map-marker-alt"></i> Geographic City
            </label>
            <input
              type="text"
              id="sim-city-input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Bhopal, Austin, Chicago..."
              disabled={isRunning}
              maxLength={40}
            />
          </div>

          <div className="sim-button-group">
            {!isRunning && !results && (
              <button
                type="submit"
                className="btn btn-primary sim-action-btn"
                disabled={isRunning}
              >
                <i className="fas fa-play"></i> Run Simulation
              </button>
            )}

            {isRunning && (
              <button
                type="button"
                className="btn btn-secondary sim-action-btn sim-cancel-btn"
                onClick={handleReset}
              >
                <i className="fas fa-stop"></i> Cancel
              </button>
            )}

            {results && (
              <button
                type="button"
                className="btn btn-secondary sim-action-btn"
                onClick={handleReset}
              >
                <i className="fas fa-redo"></i> Reset
              </button>
            )}
          </div>
        </form>

        {/* Quick Presets */}
        <div className="sim-presets-row">
          <span className="presets-label"><i className="fas fa-magic"></i> Quick Scenarios:</span>
          {leadHunterPresets.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              className="preset-chip"
              onClick={() => handleApplyPreset(preset)}
              disabled={isRunning}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {errorMessage && (
          <div className="sim-error-alert" role="alert">
            <i className="fas fa-exclamation-circle"></i> {errorMessage}
          </div>
        )}
      </div>

      {/* Dynamic Workflow Timeline */}
      {(isRunning || results) && (
        <WorkflowTimeline
          steps={SIMULATION_STEPS}
          currentStepIndex={currentStepIndex}
          isRunning={isRunning}
        />
      )}

      {/* Results View */}
      {results && (
        <SimulationResults
          results={results}
          onReset={handleReset}
        />
      )}
    </div>
  );
}
