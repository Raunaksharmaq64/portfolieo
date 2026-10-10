import React from 'react';

export default function AssistantLauncher({ isOpen, unreadCount, onClick }) {
  return (
    <button
      className={`ai-assistant-launcher ${isOpen ? 'launcher-active' : ''}`}
      onClick={onClick}
      aria-label={isOpen ? "Close Ask Raunak AI Assistant" : "Open Ask Raunak AI Assistant"}
      aria-expanded={isOpen}
      title="Ask Raunak AI — Portfolio Copilot"
      id="ask-raunak-ai-launcher"
    >
      <div className="launcher-inner">
        <span className="launcher-sparkle" aria-hidden="true">
          <i className={isOpen ? "fas fa-times" : "fas fa-robot"}></i>
        </span>
        <span className="launcher-text">
          {isOpen ? "Close Assistant" : "Ask Raunak AI"}
        </span>
        {!isOpen && (
          <span className="launcher-badge" aria-label="Ready to assist">
            <span className="pulse-dot"></span>
          </span>
        )}
      </div>
    </button>
  );
}
