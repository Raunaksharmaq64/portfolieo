import React, { useState, useEffect } from 'react';
import TiltCard from '../TiltCard';
import ProjectGalleryLightbox from './ProjectGalleryLightbox';
import { DEPLOYMENT_DISCLAIMER } from '../../data/deployments';
import './caseStudy.css';

export default function CaseStudyView({
  study,
  deployments = [],
  gallery = [],
  onBack,
  onNavigateStudy,
  allStudies = [],
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Scroll to top when a new study is loaded
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [study.id]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const relatedStudies = allStudies.filter((s) => s.id !== study.id);
  const primaryScreenshot = gallery[0] || null;

  return (
    <div className="case-study-page">
      {/* 1. Sticky Case Study Sub-Navbar with Breadcrumbs */}
      <nav className="cs-nav-header" aria-label="Case study navigation">
        <div className="container cs-nav-inner">
          <div className="cs-breadcrumbs">
            <span className="cs-breadcrumb-link" onClick={onBack}>
              <i className="fas fa-home"></i> Home
            </span>
            <span className="cs-breadcrumb-sep">/</span>
            <span className="cs-breadcrumb-link" onClick={onBack}>
              Case Studies
            </span>
            <span className="cs-breadcrumb-sep">/</span>
            <span className="cs-breadcrumb-current">{study.name}</span>
          </div>

          <div className="cs-nav-quicklinks">
            <a href="#overview" className="cs-quicklink">Overview</a>
            <a href="#problem" className="cs-quicklink">Problem</a>
            <a href="#vision" className="cs-quicklink">Vision</a>
            <a href="#workflow" className="cs-quicklink">Workflow</a>
            <a href="#features" className="cs-quicklink">Features</a>
            <a href="#gallery" className="cs-quicklink">Gallery ({gallery.length})</a>
            <a href="#architecture" className="cs-quicklink">Architecture</a>
            <a href="#challenges" className="cs-quicklink">Challenges</a>
            <a href="#deployments" className="cs-quicklink">Deployments</a>
            <a href="#lessons" className="cs-quicklink">Lessons</a>
          </div>

          <button className="cs-btn-back" onClick={onBack} aria-label="Back to main portfolio">
            <i className="fas fa-arrow-left"></i> Back to Portfolio
          </button>
        </div>
      </nav>

      {/* 2. Section A — Product Hero */}
      <section id="overview" className="cs-hero-section">
        <div className="container">
          <div className="cs-hero-grid">
            <div className="cs-hero-content">
              <span
                className="cs-hero-badge"
                style={{
                  backgroundColor: `hsla(${study.accentColor.split('(')[1]?.split(')')[0] || '43, 100%, 50%'}, 0.12)`,
                  color: study.accentColor,
                  border: `1px solid hsla(${study.accentColor.split('(')[1]?.split(')')[0] || '43, 100%, 50%'}, 0.35)`,
                }}
              >
                <i className="fas fa-certificate"></i> {study.badge}
              </span>

              <h1 className="cs-hero-title">{study.name}</h1>
              <p className="cs-hero-tagline">{study.tagline}</p>
              <p className="cs-hero-summary">{study.heroSummary}</p>

              <div className="cs-hero-actions">
                <a href="#gallery" className="cs-btn cs-btn-accent">
                  <i className="fas fa-images"></i> View Gallery ({gallery.length} Screens)
                </a>
                {deployments[0]?.url && (
                  <a
                    href={deployments[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-btn cs-btn-secondary"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Deployment
                  </a>
                )}
                <a href="#workflow" className="cs-btn cs-btn-secondary">
                  <i className="fas fa-stream"></i> Inspect Workflow
                </a>
              </div>

              {/* Verified metadata items */}
              <div className="cs-hero-meta-grid">
                <div className="cs-meta-item">
                  <span className="cs-meta-label">Category</span>
                  <span className="cs-meta-value">{study.verifiedMetadata.category}</span>
                </div>
                <div className="cs-meta-item">
                  <span className="cs-meta-label">Implementation Status</span>
                  <span className="cs-meta-value" style={{ color: '#22c55e' }}>
                    <i className="fas fa-check-circle"></i> {study.verifiedMetadata.status}
                  </span>
                </div>
                <div className="cs-meta-item">
                  <span className="cs-meta-label">Engineering Role</span>
                  <span className="cs-meta-value">{study.verifiedMetadata.role}</span>
                </div>
                <div className="cs-meta-item">
                  <span className="cs-meta-label">Primary Environment</span>
                  <span className="cs-meta-value">{study.verifiedMetadata.deploymentEnv}</span>
                </div>
              </div>
            </div>

            {/* Hero screenshot preview with 3D TiltCard */}
            <div className="cs-hero-preview-area">
              {primaryScreenshot && (
                <TiltCard className="cs-hero-preview-card" onClick={() => openLightbox(0)}>
                  <div className="cs-hero-preview-topbar">
                    <div className="cs-hero-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span className="cs-hero-preview-title">{primaryScreenshot.title}</span>
                    <span style={{ fontSize: '0.72rem', color: '#22c55e', fontWeight: 600 }}>
                      <i className="fas fa-expand"></i> Click to Zoom
                    </span>
                  </div>
                  <img
                    src={primaryScreenshot.src}
                    alt={primaryScreenshot.alt}
                    className="cs-hero-preview-img"
                    loading="eager"
                  />
                </TiltCard>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section B — The Problem */}
      <section id="problem" className="cs-section">
        <div className="container">
          <div className="cs-section-header">
            <span className="cs-section-tag">Business Context</span>
            <h2 className="cs-section-title">{study.problem.title}</h2>
            <p className="cs-section-sub">{study.problem.subtitle}</p>
          </div>

          <div className="cs-problem-grid">
            {study.problem.points.map((pt, idx) => (
              <div className="cs-problem-card" key={idx}>
                <div className="cs-problem-icon-wrap">
                  <i className={pt.icon}></i>
                </div>
                <div>
                  <h4>{pt.title}</h4>
                  <p>{pt.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Section C — The Idea and Vision */}
      <section id="vision" className="cs-section" style={{ backgroundColor: 'hsl(var(--bg-secondary))' }}>
        <div className="container">
          <div className="cs-section-header">
            <span className="cs-section-tag">Design Narrative</span>
            <h2 className="cs-section-title">{study.vision.title}</h2>
          </div>

          <div className="cs-vision-box">
            <p className="cs-vision-quote">{study.vision.quote}</p>
            <p className="cs-vision-desc">{study.vision.description}</p>

            <h4 className="cs-vision-audience-title">Who This Architecture Serves:</h4>
            <ul className="cs-vision-audience-list">
              {study.vision.targetAudience.map((aud, i) => (
                <li key={i}>
                  <i className="fas fa-check"></i> {aud}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Section D — How It Works (Visual Workflow) */}
      <section id="workflow" className="cs-section">
        <div className="container">
          <div className="cs-section-header">
            <span className="cs-section-tag">Execution Pipeline</span>
            <h2 className="cs-section-title">How the Workflow Operates</h2>
            <p className="cs-section-sub">
              Step-by-step technical lifecycle from initial user input through automated processing to recorded business outcome.
            </p>
          </div>

          <div className="cs-workflow-container">
            {study.workflowStages.map((stage) => (
              <div className="cs-workflow-step" key={stage.step}>
                <div className="cs-step-badge-wrap">
                  <div className="cs-step-num">{stage.step}</div>
                  <i className={`${stage.icon} cs-step-icon`}></i>
                </div>
                <div className="cs-step-content">
                  <div className="cs-step-top">
                    <h3 className="cs-step-title">{stage.title}</h3>
                    <span
                      className={`cs-step-status-tag ${
                        stage.status === 'Implemented' ? 'cs-status-implemented' : 'cs-status-partial'
                      }`}
                    >
                      {stage.status}
                    </span>
                  </div>
                  <p className="cs-step-desc">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Section E — Key Features */}
      <section id="features" className="cs-section" style={{ backgroundColor: 'hsl(var(--bg-secondary))' }}>
        <div className="container">
          <div className="cs-section-header">
            <span className="cs-section-tag">Verified Capabilities</span>
            <h2 className="cs-section-title">Core Engineering Features</h2>
            <p className="cs-section-sub">
              Product-specific capabilities verified directly from the working system and repository implementation.
            </p>
          </div>

          <div className="cs-features-grid">
            {study.keyFeatures.map((feat, idx) => (
              <div className="cs-feature-card" key={idx}>
                <div className="cs-feature-header">
                  <div className="cs-feature-icon">
                    <i className={feat.icon}></i>
                  </div>
                  <span className="cs-feature-badge">{feat.status}</span>
                </div>
                <h3 className="cs-feature-title">{feat.title}</h3>
                <p className="cs-feature-desc">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Section F — Screenshots and Product Gallery */}
      <section id="gallery" className="cs-section">
        <div className="container">
          <div className="cs-section-header">
            <span className="cs-section-tag">Visual Verification</span>
            <h2 className="cs-section-title">Product Interface Gallery</h2>
            <p className="cs-section-sub">
              Authentic screenshots captured directly from active deployments and local environments. Click any image to open the full-resolution accessible lightbox.
            </p>
          </div>

          <div className="cs-gallery-grid">
            {gallery.map((img, idx) => (
              <div className="cs-gallery-card" key={img.id} onClick={() => openLightbox(idx)}>
                <div className="cs-gallery-img-container">
                  <img
                    src={img.thumbnail}
                    alt={img.alt}
                    className="cs-gallery-img"
                    loading="lazy"
                  />
                  <div className="cs-gallery-zoom-hint">
                    <i className="fas fa-search-plus"></i> Enlarge
                  </div>
                </div>
                <div className="cs-gallery-info">
                  <span className="cs-gallery-tag">{img.category}</span>
                  <h4 className="cs-gallery-title">{img.title}</h4>
                  <p className="cs-gallery-desc">{img.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Section G — Technical Architecture */}
      <section id="architecture" className="cs-section" style={{ backgroundColor: 'hsl(var(--bg-secondary))' }}>
        <div className="container">
          <div className="cs-section-header">
            <span className="cs-section-tag">System Design</span>
            <h2 className="cs-section-title">{study.architecture.title}</h2>
            <p className="cs-section-sub">{study.architecture.description}</p>
          </div>

          <div className="cs-arch-container">
            {study.architecture.layers.map((layer, idx) => (
              <div className="cs-arch-layer-card" key={idx}>
                <div className="cs-arch-layer-header">
                  <h4 className="cs-arch-layer-name">{layer.name}</h4>
                  <span className="cs-arch-layer-tech">{layer.tech}</span>
                </div>
                <p className="cs-arch-layer-resp">{layer.responsibilities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Section H & I — Engineering Challenges & Decisions */}
      <section id="challenges" className="cs-section">
        <div className="container">
          <div className="cs-section-header">
            <span className="cs-section-tag">Engineering Rigor</span>
            <h2 className="cs-section-title">Real Challenges Encountered & Overcome</h2>
            <p className="cs-section-sub">
              Production engineering is defined by handling edge cases, asynchronous lags, and external provider constraints.
            </p>
          </div>

          <div className="cs-challenges-container">
            {study.challenges.map((ch, idx) => (
              <div className="cs-challenge-card" key={idx}>
                <div className="cs-challenge-header">
                  <h3 className="cs-challenge-title">
                    <i className="fas fa-wrench" style={{ color: 'hsl(var(--accent-color))', marginRight: '0.6rem' }}></i>
                    {ch.title}
                  </h3>
                  <span className="cs-challenge-status">{ch.status}</span>
                </div>

                <div className="cs-challenge-grid">
                  <div className="cs-challenge-block">
                    <h5>Challenge:</h5>
                    <p>{ch.challenge}</p>
                  </div>
                  <div className="cs-challenge-block">
                    <h5>Investigation:</h5>
                    <p>{ch.investigation}</p>
                  </div>
                  <div className="cs-challenge-block" style={{ gridColumn: '1 / -1' }}>
                    <h5>Engineered Approach:</h5>
                    <p>{ch.approach}</p>
                  </div>
                </div>

                <div className="cs-challenge-learning">
                  <strong>Engineering Takeaway:</strong> {ch.learning}
                </div>
              </div>
            ))}
          </div>

          {/* Section I: Product Decisions & Trade-Offs */}
          <div style={{ marginTop: '4rem' }}>
            <span className="cs-section-tag">Trade-Off Analysis</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'hsl(var(--text-primary))', marginBottom: '1rem' }}>
              Architectural Decisions & Compromises
            </h3>
            <div className="cs-decisions-grid">
              {study.decisions.map((dec, i) => (
                <div className="cs-decision-card" key={i}>
                  <h4 className="cs-decision-title">{dec.decision}</h4>
                  <p className="cs-decision-tradeoff">
                    <strong>Trade-off:</strong> {dec.tradeOff}
                  </p>
                  <p className="cs-decision-verdict">
                    <strong>Verdict:</strong> {dec.verdict}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Section J — Live Demo and Deployment Details (WITH MANDATORY DISCLAIMER) */}
      <section id="deployments" className="cs-section" style={{ backgroundColor: 'hsl(var(--bg-secondary))' }}>
        <div className="container">
          <div className="cs-section-header">
            <span className="cs-section-tag">Infrastructure</span>
            <h2 className="cs-section-title">Deployment Registry & Public Endpoints</h2>
            <p className="cs-section-sub">
              Documented production URLs and hosting configurations verified during test cycles.
            </p>
          </div>

          <div className="cs-deployment-panel">
            {/* MANDATORY IP AND DEPLOYMENT DISCLAIMER */}
            <div className="cs-deployment-disclaimer-box" role="note">
              <i className="fas fa-exclamation-triangle cs-disclaimer-icon"></i>
              <div className="cs-disclaimer-text">
                <strong>Deployment notice:</strong> These links and IP addresses reflect previously documented deployments and may no longer be active. An IP address may stop working if an AWS EC2 instance expires, is stopped, is replaced, or its public IP changes, or if the application has been moved to another server or domain. Some deployments may also be temporarily unavailable. If a link does not work, the application may have been redeployed or its infrastructure may have changed.
              </div>
            </div>

            <div className="cs-deployments-list">
              {deployments.map((dep, idx) => (
                <div className="cs-deployment-item" key={idx}>
                  <div className="cs-deployment-left">
                    <span className="cs-deployment-label">{dep.label}</span>
                    <span className="cs-deployment-sub">
                      {dep.type} • Last checked: {dep.lastChecked} (HTTP {dep.httpCode || '200'})
                    </span>
                    <p className="cs-deployment-note">{dep.note}</p>
                  </div>

                  <div className="cs-deployment-right">
                    <span className="cs-deploy-status-badge cs-deploy-verified">
                      <i className="fas fa-check-circle"></i> {dep.status}
                    </span>
                    <a
                      href={dep.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs-btn-visit"
                    >
                      Visit Destination <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Section K & L — What I Learned & Future Improvements */}
      <section id="lessons" className="cs-section">
        <div className="container">
          <div className="cs-section-header">
            <span className="cs-section-tag">Reflections & Growth</span>
            <h2 className="cs-section-title">What This Project Taught Me</h2>
            <p className="cs-section-sub">
              Core takeaways from architecting, deploying, and debugging software intended for real operational workflows.
            </p>
          </div>

          <div className="cs-lessons-list">
            {study.lessons.map((lesson, idx) => (
              <div className="cs-lesson-item" key={idx}>
                <i className="fas fa-lightbulb"></i>
                <span>{lesson}</span>
              </div>
            ))}
          </div>

          {/* Section L: Future Roadmap */}
          <div style={{ marginTop: '4rem' }}>
            <span className="cs-section-tag">Roadmap</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'hsl(var(--text-primary))', marginBottom: '0.5rem' }}>
              Documented Future Improvements
            </h3>
            <p style={{ color: 'hsl(var(--text-secondary))', fontSize: '0.92rem' }}>
              Realistic enhancements planned to expand functionality and strengthen observability.
            </p>
            <div className="cs-future-grid">
              {study.futureImprovements.map((imp, idx) => (
                <div className="cs-future-card" key={idx}>
                  <span className="cs-future-tag">{imp.status}</span>
                  <h4 className="cs-future-title">{imp.title}</h4>
                  <p className="cs-future-desc">{imp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. Section M — Related Projects & Seamless Switcher */}
      <section className="cs-related-section">
        <div className="container">
          <div className="cs-section-header" style={{ marginBottom: '1.5rem' }}>
            <span className="cs-section-tag">Explore More Products</span>
            <h2 className="cs-section-title">Other Flagship Engineering Showcases</h2>
            <p className="cs-section-sub">
              Continue reviewing my advanced business software systems.
            </p>
          </div>

          <div className="cs-related-grid">
            {relatedStudies.map((rel) => (
              <div
                className="cs-related-card"
                key={rel.id}
                data-study-id={rel.id}
                role="button"
                tabIndex={0}
                onClick={() => onNavigateStudy(rel.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigateStudy(rel.id);
                  }
                }}
              >
                <div>
                  <span className="cs-related-direction">Next Case Study</span>
                  <h3 className="cs-related-title">{rel.name}</h3>
                  <p className="cs-related-tagline">{rel.tagline}</p>
                </div>
                <span className="cs-related-action">
                  Read Case Study <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button className="cs-btn cs-btn-secondary" onClick={onBack}>
              <i className="fas fa-arrow-left"></i> Return to Full Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* 13. Lightbox Component */}
      <ProjectGalleryLightbox
        isOpen={lightboxOpen}
        images={gallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1))}
        onNext={() => setLightboxIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0))}
      />
    </div>
  );
}
