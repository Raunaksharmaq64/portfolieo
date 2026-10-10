import React, { useState, useEffect, useRef } from 'react';
import AudioWaveform from './AudioWaveform';
import { voiceAgentScenarios } from '../../data/simulatorScenarios';

const CALL_STAGES = [
  { id: 'ready', label: 'Idle / Ready' },
  { id: 'greeting', label: '1. AI Greeting' },
  { id: 'customer', label: '2. Caller Audio' },
  { id: 'rag', label: '3. Knowledge RAG' },
  { id: 'classify', label: '4. Intent Analysis' },
  { id: 'summary', label: '5. Call Summary' },
  { id: 'followup', label: '6. Webhook Sync' },
  { id: 'completed', label: 'Call Finished' }
];

export default function VoiceAgentSimulator() {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [callStage, setCallStage] = useState('ready'); // 'ready' | 'greeting' | 'customer' | 'rag' | 'classify' | 'summary' | 'followup' | 'completed'
  const [transcriptIndex, setTranscriptIndex] = useState(-1);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const scenario = voiceAgentScenarios[activeScenarioIndex] || voiceAgentScenarios[0];
  const timersRef = useRef([]);

  const clearTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const handleStartCall = () => {
    clearTimers();
    setCallStage('greeting');
    setTranscriptIndex(0);

    // Sequence of state transitions with natural pacing
    const timeline = [
      { delay: 1200, stage: 'customer', transcript: 1 },
      { delay: 1500, stage: 'rag', transcript: 2 },
      { delay: 1400, stage: 'customer', transcript: 3 },
      { delay: 1300, stage: 'classify', transcript: 4 },
      { delay: 1100, stage: 'summary', transcript: 4 },
      { delay: 900, stage: 'followup', transcript: 4 },
      { delay: 700, stage: 'completed', transcript: 4 }
    ];

    let accum = 0;
    timeline.forEach((item) => {
      accum += item.delay;
      const t = setTimeout(() => {
        setCallStage(item.stage);
        setTranscriptIndex(item.transcript);
      }, accum);
      timersRef.current.push(t);
    });
  };

  const handleResetCall = () => {
    clearTimers();
    setCallStage('ready');
    setTranscriptIndex(-1);
    setCopiedSummary(false);
  };

  const handleSelectScenario = (index) => {
    if (callStage !== 'ready' && callStage !== 'completed') return;
    setActiveScenarioIndex(index);
    handleResetCall();
  };

  const handleCopySummary = async () => {
    try {
      const summaryText = `[VOICE AGENT CALL SUMMARY]\nScenario: ${scenario.title}\nClassification: ${scenario.intentBadge} (${scenario.customerIntent})\nSummary: ${scenario.callSummary}\nFollow-Up Webhook: ${scenario.followUp}`;
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(summaryText);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = summaryText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    } catch (err) {
      console.warn("Failed to copy call summary:", err);
    }
  };

  const isSpeaking = callStage === 'greeting' || callStage === 'customer';
  const isRunning = callStage !== 'ready' && callStage !== 'completed';

  return (
    <div className="simulator-card voice-agent-simulator" id="voice-agent-simulator-widget">
      <div className="simulator-header">
        <div className="sim-title-group">
          <span className="sim-tag"><i className="fas fa-phone-alt"></i> Module 2</span>
          <h3>AI Voice Agent Telephony &amp; CRM Simulator</h3>
          <p>Experience sub-second voice flow, Document RAG grounding, intent classification, and CRM webhook updates.</p>
        </div>
        <div className="sim-badge-safe">
          <i className="fas fa-shield-alt"></i> Simulated Telephony Demo
        </div>
      </div>

      {/* Scenario Tabs */}
      <div className="voice-scenario-selector">
        <span className="scenario-label"><i className="fas fa-layer-group"></i> Choose Call Scenario:</span>
        <div className="scenario-pills">
          {voiceAgentScenarios.map((sc, sIdx) => (
            <button
              key={sc.id}
              type="button"
              className={`scenario-pill ${activeScenarioIndex === sIdx ? 'active' : ''}`}
              onClick={() => handleSelectScenario(sIdx)}
              disabled={isRunning}
            >
              {sc.title}
            </button>
          ))}
        </div>
      </div>

      {/* Simulator Body */}
      <div className="voice-simulator-grid">
        {/* Left Column: Call Console */}
        <div className="voice-console-panel">
          <div className="console-display">
            <div className="call-status-bar">
              <span className={`call-dot dot-${callStage}`}></span>
              <span className="call-stage-text">
                {callStage === 'ready' && 'Line Idle • Ready for Call'}
                {callStage === 'greeting' && 'AI Receptionist Speaking (Sub-second TTS)...'}
                {callStage === 'customer' && 'Inbound Caller Audio Streaming...'}
                {callStage === 'rag' && 'Grounding Facts via PDF Document RAG...'}
                {callStage === 'classify' && 'Extracting Intent & Classifying Lead...'}
                {callStage === 'summary' && 'Generating Structured Call Record...'}
                {callStage === 'followup' && 'Queuing PostgreSQL CRM Webhook...'}
                {callStage === 'completed' && 'Call Completed Successfully'}
              </span>
            </div>

            {/* Audio Waveform */}
            <AudioWaveform
              isSpeaking={isSpeaking}
              statusLabel={
                isSpeaking
                  ? (callStage === 'greeting' ? "AI Receptionist Speaking" : "Caller Speaking")
                  : (isRunning ? "Processing Audio / RAG" : "Line Disconnected")
              }
            />

            {/* Call Action Controls */}
            <div className="console-actions">
              {callStage === 'ready' && (
                <button
                  type="button"
                  className="btn btn-primary btn-call-start"
                  onClick={handleStartCall}
                >
                  <i className="fas fa-phone"></i> Simulate Inbound Call
                </button>
              )}

              {isRunning && (
                <button
                  type="button"
                  className="btn btn-secondary btn-call-stop"
                  onClick={handleResetCall}
                >
                  <i className="fas fa-phone-slash"></i> End Call / Reset
                </button>
              )}

              {callStage === 'completed' && (
                <button
                  type="button"
                  className="btn btn-secondary btn-call-replay"
                  onClick={handleResetCall}
                >
                  <i className="fas fa-redo"></i> Replay Call
                </button>
              )}
            </div>
          </div>

          {/* Classification & CRM Card (Appears as call progresses) */}
          {(callStage === 'classify' || callStage === 'summary' || callStage === 'followup' || callStage === 'completed') && (
            <div className="voice-analytics-card">
              <div className="analytics-header">
                <span className="analytics-title"><i className="fas fa-brain"></i> AI Lead Classification</span>
                <span className={`lead-pill pill-${scenario.leadClass}`}>
                  {scenario.intentBadge}
                </span>
              </div>
              <div className="intent-desc">
                <strong>Detected Intent:</strong> {scenario.customerIntent}
              </div>

              {(callStage === 'summary' || callStage === 'followup' || callStage === 'completed') && (
                <>
                  <div className="summary-block">
                    <span className="summary-title"><i className="fas fa-clipboard-list"></i> Call Summary:</span>
                    <p>{scenario.callSummary}</p>
                  </div>
                  <div className="webhook-block">
                    <span className="webhook-title"><i className="fas fa-database"></i> CRM Webhook &amp; Dispatch:</span>
                    <p>{scenario.followUp}</p>
                  </div>
                  <button
                    type="button"
                    className="copy-summary-btn"
                    onClick={handleCopySummary}
                  >
                    <i className={copiedSummary ? "fas fa-check" : "fas fa-copy"}></i>
                    <span>{copiedSummary ? "Summary Copied!" : "Copy Call Summary"}</span>
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Live Transcript Stream */}
        <div className="voice-transcript-panel">
          <div className="transcript-header">
            <h4><i className="fas fa-stream"></i> Synchronized Audio Transcript</h4>
            <span className="transcript-badge">Telephony Stream</span>
          </div>

          <div className="transcript-messages-stream">
            {transcriptIndex === -1 ? (
              <div className="transcript-placeholder">
                <i className="fas fa-microphone-alt"></i>
                <p>Click <strong>"Simulate Inbound Call"</strong> to view real-time synchronized conversational audio transcripts.</p>
              </div>
            ) : (
              <div className="transcript-bubble-list">
                {scenario.transcript.slice(0, transcriptIndex + 1).map((item, tIdx) => (
                  <div
                    key={tIdx}
                    className={`transcript-message-item role-${item.role}`}
                  >
                    <div className="transcript-speaker">
                      <span className="speaker-avatar">
                        <i className={item.role === 'agent' ? 'fas fa-robot' : 'fas fa-user'}></i>
                      </span>
                      <span className="speaker-name">{item.speaker}</span>
                    </div>
                    <div className="transcript-text">
                      {item.text}
                    </div>
                  </div>
                ))}

                {isRunning && (
                  <div className="transcript-live-typing">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-text">Real-time speech turn...</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
