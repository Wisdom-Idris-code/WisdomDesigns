import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const SEO = ({ title, description, canonicalPath }) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Title
    const siteTitle = 'Wisdom Digital';
    document.title = title ? `${title} | ${siteTitle}` : 'Wisdom Digital | Professional Websites for Growing Businesses';

    // 2. Update Meta Description
    const defaultDesc = 'Wisdom Digital builds modern, mobile-first websites for small and growing businesses with direct WhatsApp ordering, digital menus, and zero technical hassle.';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || defaultDesc);
    }

    // 3. Update OpenGraph Description & Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', document.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description || defaultDesc);
    }

    // 4. Update Canonical Link
    const currentPath = canonicalPath || location.pathname;
    const fullUrl = `https://wisdomdigital.dev${currentPath}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);
  }, [title, description, canonicalPath, location.pathname]);

  return null;
};
