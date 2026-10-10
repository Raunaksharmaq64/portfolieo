import React from 'react';
import TiltCard from '../TiltCard';
import ScrollReveal from '../ScrollReveal';
import { resolveAssetPath, handleImageError } from '../../utils/assetHelper';

export default function FeaturedProducts({
  flagshipList = [],
  onSelectCaseStudy,
}) {
  return (
    <section id="featured-products" className="featured-products-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="featured-header-badge">
              <i className="fas fa-crown"></i> Flagship Engineering Products
            </span>
            <h2 className="title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
              Advanced Business Solutions
            </h2>
            <div className="header-line" style={{ margin: '0 auto 1.25rem' }}></div>
            <p
              style={{
                color: 'hsl(var(--text-secondary))',
                maxWidth: '750px',
                margin: '0 auto',
                fontSize: '1rem',
                lineHeight: '1.7',
              }}
            >
              Engineered to solve real operational bottlenecks: lead research, autonomous telephone reception, and multi-channel messaging automation. Explore full architectural case studies, real screenshots, and technical breakdowns below.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="featured-products-grid">
            {flagshipList.map((item) => (
              <TiltCard
                key={item.id}
                className="flagship-card"
                onClick={() => onSelectCaseStudy(item.id)}
              >
                {/* Accent top line */}
                <div
                  className="flagship-card-accent-bar"
                  style={{ backgroundColor: item.accentColor }}
                ></div>

                {/* Screenshot banner preview */}
                <div className="flagship-card-image-wrap">
                  <img
                    src={resolveAssetPath(item.heroImage || item.thumbnail)}
                    alt={item.name}
                    className="flagship-card-img"
                    loading="lazy"
                    onError={(e) => handleImageError(e)}
                  />
                  <div className="flagship-status-pill">
                    <span className="flagship-status-dot"></span>
                    Verified Live
                  </div>
                </div>

                {/* Card details */}
                <div className="flagship-card-body">
                  <span
                    className="flagship-category-tag"
                    style={{ color: item.accentColor }}
                  >
                    {item.badge}
                  </span>
                  <h3 className="flagship-card-title">{item.name}</h3>
                  <p className="flagship-card-tagline">{item.tagline}</p>
                  <p className="flagship-card-desc">{item.summary}</p>

                  <div className="flagship-tech-stack">
                    {item.techStack.slice(0, 4).map((tech, i) => (
                      <span className="flagship-tech-pill" key={i}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flagship-card-footer">
                    <button
                      className="flagship-btn-primary"
                      data-case-study={item.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCaseStudy(item.id);
                      }}
                      aria-label={`Explore ${item.name} Case Study`}
                    >
                      Read Case Study <i className="fas fa-arrow-right"></i>
                    </button>

                    {item.liveDemoUrl && (
                      <a
                        href={item.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flagship-btn-demo"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Open ${item.name} live deployment`}
                        title="Open Live Deployment"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
