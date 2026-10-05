import React from 'react';

/**
 * Footer layout partial – migrated from `defaultFooter.jsp`.
 * Preserves the original markup while applying the modern CSS design tokens.
 *
 * Design tokens used:
 * - `.modern-container` – provides responsive horizontal padding.
 * - `.modern-card`      – gives a subtle background and rounded corners.
 * - `.modern-footer`    – specific styling for the footer area.
 *
 * No state or event handling is required because the original JSP
 * contains only static markup.
 */
const DefaultFooter: React.FC = () => (
  <footer className="modern-container modern-card modern-footer">
    © Baeldung
  </footer>
);

export default DefaultFooter;