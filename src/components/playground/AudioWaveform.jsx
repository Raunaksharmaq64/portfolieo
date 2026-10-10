import React from 'react';

export default function AudioWaveform({ isSpeaking = false, statusLabel = "Idle" }) {
  // 18 responsive audio visualizer bars
  const barDelays = [0.1, 0.35, 0.2, 0.5, 0.15, 0.45, 0.25, 0.6, 0.3, 0.55, 0.18, 0.4, 0.22, 0.65, 0.32, 0.48, 0.12, 0.38];

  return (
    <div className="audio-waveform-container" aria-hidden="true">
      <div className="waveform-status-badge">
        <span className={`status-led ${isSpeaking ? 'led-active' : ''}`}></span>
        <span className="status-text">{statusLabel}</span>
      </div>

      <div className={`waveform-visualizer ${isSpeaking ? 'is-active' : 'is-idle'}`}>
        {barDelays.map((delay, index) => (
          <span
            key={index}
            className="waveform-bar"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </div>
    </div>
  );
}
