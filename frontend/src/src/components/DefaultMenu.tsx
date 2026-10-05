import React from 'react';

interface DefaultMenuProps {
  /** Base context path of the application (e.g., "/myapp"). */
  contextPath?: string;
}

/**
 * Navigation partial that mirrors the original JSP `defaultMenu.jsp`.
 * It preserves the exact link structure and URLs while applying
 * modern CSS utility classes for a clean, responsive layout.
 */
const DefaultMenu: React.FC<DefaultMenuProps> = ({ contextPath = '' }) => {
  // Normalise the context path to avoid double slashes
  const base = contextPath.endsWith('/') ? contextPath.slice(0, -1) : contextPath;

  return (
    <nav className="nav modern-container">
      {/* Empty logo link – kept for visual consistency with the original JSP */}
      <a href={`${base}/`} className="logo-link" aria-label="Home" />

      <ul id="menu" className="modern-nav-list">
        <li>
          <a href={`${base}/`}>Home</a>
        </li>
        <li>
          <a href={`${base}/springmvc`}>SpringMVC</a>
        </li>
        <li>
          <a href={`${base}/apachetiles`}>ApacheTiles</a>
        </li>
      </ul>
    </nav>
  );
};

export default DefaultMenu;