import React from 'react';
import { suggestedQuestionsList } from '../../data/portfolioKnowledge';

export default function SuggestedQuestions({ onSelectQuestion, disabled }) {
  return (
    <div className="suggested-questions-container" aria-label="Suggested Prompts">
      <div className="suggested-header">
        <i className="fas fa-lightbulb" style={{ color: '#fbbf24' }}></i>
        <span>Explore Suggested Questions:</span>
      </div>
      <div className="suggested-chips-grid">
        {suggestedQuestionsList.map((item) => (
          <button
            key={item.id}
            type="button"
            className="suggested-chip"
            onClick={() => onSelectQuestion(item.question)}
            disabled={disabled}
            title={`Ask: "${item.question}"`}
          >
            <span className="chip-category">{item.category}</span>
            <span className="chip-text">{item.question}</span>
            <i className="fas fa-arrow-right chip-arrow" aria-hidden="true"></i>
          </button>
        ))}
      </div>
    </div>
  );
}
