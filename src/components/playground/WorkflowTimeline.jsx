import React from 'react';

export default function WorkflowTimeline({ steps = [], currentStepIndex = 0, isRunning = false }) {
  return (
    <div className="workflow-timeline-wrapper" aria-label="Simulation Workflow Stages">
      <div className="timeline-steps-list">
        {steps.map((step, idx) => {
          const isDone = idx < currentStepIndex;
          const isCurrent = idx === currentStepIndex && isRunning;
          const isPending = idx > currentStepIndex;

          return (
            <div
              key={step.id || idx}
              className={`timeline-step-item ${isDone ? 'step-done' : ''} ${isCurrent ? 'step-current' : ''} ${isPending ? 'step-pending' : ''}`}
            >
              <div className="step-indicator">
                {isDone ? (
                  <i className="fas fa-check"></i>
                ) : isCurrent ? (
                  <span className="step-spinner"></span>
                ) : (
                  <span>{idx + 1}</span>
                )}
              </div>
              <div className="step-info">
                <span className="step-name">{step.title}</span>
                {isCurrent && <span className="step-status-tag">{step.activeDesc || 'Processing...'}</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
