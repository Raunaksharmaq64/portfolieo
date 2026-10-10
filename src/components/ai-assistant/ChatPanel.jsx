import React, { useRef, useEffect } from 'react';
import SuggestedQuestions from './SuggestedQuestions';

export default function ChatPanel({
  isOpen,
  isMinimized,
  messages,
  inputText,
  setInputText,
  isGenerating,
  onSendMessage,
  onSelectSuggested,
  onClose,
  onMinimize,
  onClearChat,
  onNavigateAction
}) {
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isGenerating, isOpen, isMinimized]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim() || isGenerating) return;
    onSendMessage(inputText.trim());
  };

  const renderFormattedText = (rawText) => {
    if (!rawText) return null;
    const lines = rawText.split('\n');

    return lines.map((line, idx) => {
      // Bold text handling: **text**
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      const parsedLine = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={pIdx}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      if (line.startsWith('• ') || line.startsWith('- ')) {
        return (
          <li key={idx} className="ai-bullet-item">
            {parsedLine}
          </li>
        );
      }

      if (line.trim() === '') {
        return <div key={idx} className="ai-line-spacer" />;
      }

      return (
        <p key={idx} className="ai-paragraph">
          {parsedLine}
        </p>
      );
    });
  };

  return (
    <div
      className={`ai-chat-panel ${isMinimized ? 'panel-minimized' : ''}`}
      role="region"
      aria-label="Ask Raunak AI Chat Panel"
      id="ask-raunak-ai-panel"
    >
      {/* Title Bar */}
      <div className="ai-panel-header">
        <div className="ai-header-info">
          <div className="ai-avatar-wrap">
            <span className="ai-avatar-icon"><i className="fas fa-robot"></i></span>
            <span className="ai-status-indicator" title="Grounded Knowledge Engine Online"></span>
          </div>
          <div className="ai-title-details">
            <h3 className="ai-agent-name">Ask Raunak AI</h3>
            <span className="ai-agent-subtitle">
              <i className="fas fa-shield-alt"></i> Verified Portfolio Copilot
            </span>
          </div>
        </div>

        <div className="ai-header-controls">
          <button
            type="button"
            className="ai-ctrl-btn"
            onClick={onClearChat}
            title="Clear Chat History"
            aria-label="Clear chat history"
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <button
            type="button"
            className="ai-ctrl-btn"
            onClick={onMinimize}
            title={isMinimized ? "Expand Panel" : "Minimize Panel"}
            aria-label={isMinimized ? "Expand panel" : "Minimize panel"}
          >
            <i className={isMinimized ? "fas fa-expand-alt" : "fas fa-minus"}></i>
          </button>
          <button
            type="button"
            className="ai-ctrl-btn ai-close-btn"
            onClick={onClose}
            title="Close Assistant (Esc)"
            aria-label="Close assistant"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages Scroll View */}
          <div className="ai-messages-container" tabIndex={0} aria-label="Conversation messages">
            {messages.length === 0 ? (
              <div className="ai-welcome-card">
                <div className="welcome-glow-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <h4>Hello! Ask me anything about Raunak's work</h4>
                <p>
                  I am trained on verified dossiers of Raunak's <strong>AI Agents (LeadHunter, Voice Agent, WhatsApp OS)</strong>, full-stack architectures, technical skills, and engineering challenges.
                </p>
                <SuggestedQuestions
                  onSelectQuestion={onSelectSuggested}
                  disabled={isGenerating}
                />
              </div>
            ) : (
              <div className="ai-messages-list">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`ai-message-row message-${msg.sender}`}
                  >
                    <div className="ai-message-bubble">
                      <div className="ai-message-meta">
                        <span className="ai-sender-name">
                          {msg.sender === 'user' ? 'You' : 'Raunak AI'}
                        </span>
                        <span className="ai-timestamp">{msg.time}</span>
                      </div>
                      <div className="ai-message-body">
                        {renderFormattedText(msg.text)}
                      </div>

                      {/* Contextual Navigation Actions */}
                      {msg.actions && msg.actions.length > 0 && (
                        <div className="ai-actions-wrap" aria-label="Contextual Links">
                          {msg.actions.map((action, aIdx) => (
                            <button
                              key={aIdx}
                              type="button"
                              className="ai-action-chip"
                              onClick={() => onNavigateAction(action)}
                            >
                              <span>{action.label}</span>
                              <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isGenerating && (
                  <div className="ai-message-row message-assistant">
                    <div className="ai-message-bubble ai-typing-bubble">
                      <div className="ai-typing-indicator">
                        <span className="typing-dot"></span>
                        <span className="typing-dot"></span>
                        <span className="typing-dot"></span>
                      </div>
                      <span className="typing-label">Analyzing verified knowledge...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Quick Suggestions below messages if conversation is ongoing */}
          {messages.length > 0 && !isGenerating && (
            <div className="ai-inline-prompts">
              <button
                type="button"
                className="ai-quick-prompt"
                onClick={() => onSelectSuggested("What is Raunak's strongest AI project?")}
              >
                Strongest Project?
              </button>
              <button
                type="button"
                className="ai-quick-prompt"
                onClick={() => onSelectSuggested("What engineering challenges has Raunak worked on?")}
              >
                Engineering Challenges?
              </button>
              <button
                type="button"
                className="ai-quick-prompt"
                onClick={() => onSelectSuggested("Why could Raunak be a good fit for an AI automation role?")}
              >
                Why Hire?
              </button>
            </div>
          )}

          {/* Input Control Box */}
          <form className="ai-input-form" onSubmit={handleSubmit}>
            <div className="ai-input-wrapper">
              <input
                ref={inputRef}
                type="text"
                className="ai-text-input"
                placeholder="Ask about AI projects, tech stack, Redis, FastAPI..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isGenerating}
                maxLength={300}
                aria-label="Ask a question"
              />
              <button
                type="submit"
                className="ai-send-btn"
                disabled={!inputText.trim() || isGenerating}
                aria-label="Send message"
                title="Send message"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <div className="ai-disclaimer-note">
              <span>🔒 100% Client-Safe Knowledge Engine • Grounded in repo records</span>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
