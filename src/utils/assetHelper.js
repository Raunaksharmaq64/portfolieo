/**
 * Centralized Asset & Thumbnail Path Resolver
 * 
 * Safely resolves asset paths considering Vite's configured base URL (/portfolieo_raunak/)
 * for both local dev and production subdirectory deployments (e.g., GitHub Pages).
 * Includes robust fallback and error handlers to eliminate broken image icons.
 */

export const resolveAssetPath = (path) => {
  if (!path) return '';
  // Keep remote or data URLs untouched
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  // Prevent double prepending if path already contains cleanBase or baseUrl
  if (path.startsWith(cleanBase)) {
    return path;
  }
  const strippedBase = cleanBase.replace(/^\/|\/$/g, '');
  if (strippedBase && (path.startsWith(strippedBase + '/') || path.startsWith('/' + strippedBase + '/'))) {
    const withoutBase = path.replace(new RegExp(`^/?${strippedBase}/`), '');
    return `${cleanBase}${withoutBase}`;
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

/**
 * Universal fallback banner if an image fails to load.
 */
export const FALLBACK_PROJECT_IMAGE = resolveAssetPath('assets/projects/standard/personal-portfolio.svg');

/**
 * Resilient image error handler:
 * - Cancels onerror to prevent infinite loops
 * - Replaces failed src with a verified vector fallback
 * - Adds a CSS class marker for diagnostic styling
 */
export const handleImageError = (e, customFallback = FALLBACK_PROJECT_IMAGE) => {
  if (e && e.currentTarget) {
    const target = e.currentTarget;
    if (target.dataset.hasFallbackApplied === 'true') {
      return;
    }
    target.dataset.hasFallbackApplied = 'true';
    target.onerror = null;
    if (customFallback && target.src !== customFallback) {
      target.src = customFallback;
      target.classList.add('img-fallback-applied');
    }
  }
};
