import React, { useState } from 'react';
import LeadHunterSimulator from './LeadHunterSimulator';
import VoiceAgentSimulator from './VoiceAgentSimulator';
import ScrollReveal from '../ScrollReveal';

export default function AgentPlayground() {
  const [activeTab, setActiveTab] = useState('leadhunter'); // 'leadhunter' | 'voice'

  return (
    <section id="agent-playground" className="agent-playground-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="subtitle">Interactive Sandbox</span>
            <h2 className="title">Try the Agents Live</h2>
            <div className="header-line"></div>
            <p className="playground-section-intro">
              Explore safe, browser-based demonstrations of the automated workflows behind my flagship products.
              Test geographic scouting and website diagnostics with <strong>LeadHunter</strong>, or simulate 24/7 conversational reception and CRM synchronization with the <strong>AI Voice Agent</strong>.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Controls */}
        <ScrollReveal>
          <div className="playground-tabs-bar">
            <button
              type="button"
              className={`playground-tab-btn ${activeTab === 'leadhunter' ? 'active' : ''}`}
              onClick={() => setActiveTab('leadhunter')}
              aria-label="Switch to LeadHunter Simulator"
            >
              <i className="fas fa-crosshairs"></i>
              <span>LeadHunter Simulator</span>
              <span className="tab-pill">B2B Scout &amp; Audit</span>
            </button>

            <button
              type="button"
              className={`playground-tab-btn ${activeTab === 'voice' ? 'active' : ''}`}
              onClick={() => setActiveTab('voice')}
              aria-label="Switch to Voice Agent Simulator"
            >
              <i className="fas fa-phone-alt"></i>
              <span>Voice Agent Simulator</span>
              <span className="tab-pill">Telephony &amp; CRM</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Active Simulator Display */}
        <div className="playground-content-area">
          {activeTab === 'leadhunter' ? (
            <LeadHunterSimulator />
          ) : (
            <VoiceAgentSimulator />
          )}
        </div>
      </div>
    </section>
  );
}
