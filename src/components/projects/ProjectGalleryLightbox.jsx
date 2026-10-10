import React, { useEffect, useRef } from 'react';

/**
 * Accessible Lightbox for Product Screenshot Galleries
 * Supports keyboard navigation: Escape, ArrowLeft, ArrowRight
 */
export default function ProjectGalleryLightbox({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext,
}) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on mount for accessibility
    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div
      className="cs-lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
      onClick={(e) => {
        if (e.target.classList.contains('cs-lightbox-overlay')) {
          onClose();
        }
      }}
    >
      <div className="cs-lightbox-container">
        {/* Top bar controls */}
        <div className="cs-lightbox-topbar">
          <div className="cs-lightbox-counter">
            <span className="cs-counter-current">{currentIndex + 1}</span>
            <span className="cs-counter-divider">/</span>
            <span className="cs-counter-total">{images.length}</span>
            <span className="cs-lightbox-category-badge">{currentImage.category}</span>
          </div>

          <div className="cs-lightbox-actions">
            <button
              ref={closeBtnRef}
              className="cs-lightbox-btn cs-btn-close"
              onClick={onClose}
              aria-label="Close image preview (Escape)"
              title="Close (Esc)"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        {/* Main Stage */}
        <div className="cs-lightbox-stage">
          {images.length > 1 && (
            <button
              className="cs-lightbox-nav-btn cs-nav-prev"
              onClick={onPrev}
              aria-label="Previous screenshot (Left arrow)"
              title="Previous (Left Arrow)"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          )}

          <div className="cs-lightbox-image-wrap">
            <img
              src={currentImage.src}
              alt={currentImage.alt || currentImage.title}
              className="cs-lightbox-img"
              loading="eager"
            />
          </div>

          {images.length > 1 && (
            <button
              className="cs-lightbox-nav-btn cs-nav-next"
              onClick={onNext}
              aria-label="Next screenshot (Right arrow)"
              title="Next (Right Arrow)"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          )}
        </div>

        {/* Bottom Caption */}
        <div className="cs-lightbox-caption">
          <h4 className="cs-lightbox-title">{currentImage.title}</h4>
          <p className="cs-lightbox-desc">{currentImage.description}</p>
        </div>
      </div>
    </div>
  );
}
