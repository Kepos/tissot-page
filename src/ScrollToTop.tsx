// src/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrollt zum Seitenanfang bei jedem Pfadwechsel
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
