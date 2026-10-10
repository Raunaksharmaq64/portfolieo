import React, { useState } from 'react';

export default function SimulationResults({ results, onReset }) {
  const [copied, setCopied] = useState(false);

  if (!results) return null;

  const { sampleLead, diagnostics, pitch } = results;

  const handleCopyPitch = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(pitch);
      } else {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = pitch;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.warn("Clipboard copy failed:", err);
    }
  };

  return (
    <div className="simulation-results-card">
      <div className="results-disclaimer-banner">
        <i className="fas fa-info-circle"></i>
        <span><strong>Simulation Only:</strong> Fictional sample data generated locally in-browser. Zero external requests or live scraping occurred.</span>
      </div>

      <div className="results-header">
        <div>
          <span className="results-badge"><i className="fas fa-file-contract"></i> Sample Audit Report</span>
          <h3 className="results-business-name">{sampleLead.name}</h3>
          <p className="results-meta">
            <span>📍 {sampleLead.city}</span> • <span>🏷️ {sampleLead.category}</span> • <span>🌐 {sampleLead.website}</span>
          </p>
        </div>
        <div className="priority-pill">
          <span className="priority-dot"></span>
          <span>{sampleLead.priority}</span>
        </div>
      </div>

      {/* Audit Findings */}
      <div className="audit-section">
        <div className="audit-section-title">
          <i className="fas fa-microscope" style={{ color: '#fbbf24' }}></i>
          <span>Simulated Audit — Example Technical Findings</span>
        </div>
        <div className="audit-findings-grid">
          {diagnostics.map((diag, idx) => (
            <div key={idx} className={`audit-finding-card status-${diag.status}`}>
              <div className="finding-header">
                <i className={diag.status === 'critical' ? 'fas fa-exclamation-triangle' : 'fas fa-exclamation-circle'}></i>
                <span className="finding-title">{diag.test}</span>
              </div>
              <p className="finding-detail">{diag.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Generated Pitch */}
      <div className="pitch-section">
        <div className="pitch-header">
          <div className="pitch-title">
            <i className="fas fa-magic" style={{ color: '#fbbf24' }}></i>
            <span>Context-Aware Cold Pitch Draft (Gemini LLM Simulation)</span>
          </div>
          <button
            type="button"
            className="copy-pitch-btn"
            onClick={handleCopyPitch}
            title="Copy Pitch to Clipboard"
          >
            <i className={copied ? "fas fa-check" : "fas fa-copy"}></i>
            <span>{copied ? "Copied to Clipboard!" : "Copy Pitch"}</span>
          </button>
        </div>
        <pre className="pitch-content">{pitch}</pre>
      </div>

      {/* Footer controls */}
      <div className="results-footer-actions">
        <button type="button" className="btn btn-secondary btn-sm" onClick={onReset}>
          <i className="fas fa-redo"></i> Run Another Simulation
        </button>
        <a href="#/case-study/leadhunter" className="btn btn-primary btn-sm">
          Explore LeadHunter Architecture <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}
