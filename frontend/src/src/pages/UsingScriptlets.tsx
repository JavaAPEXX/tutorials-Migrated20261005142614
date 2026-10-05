import React from "react";

/**
 * Props mirroring the original JSP request attribute `movieMap`.
 * The map keys are the movie codes and the values are the movie titles.
 */
interface UsingScriptletsProps {
  /** Optional map of movie code → title, supplied by the parent route/controller */
  movieMap?: Record<string, string>;
}

/**
 * React migration of `using-scriptlets.jsp`.
 * - No forms or custom JavaScript are present, therefore no state or handlers are introduced.
 * - The table is wrapped in a responsive container and uses the modern CSS classes
 *   defined by the target design system (`.modern-container`, `.modern-card`, etc.).
 * - Conditional rendering preserves the original JSP logic:
 *   * If `movieMap` is null/undefined or empty, a single row displays “No movies found.”
 *   * Otherwise each entry is rendered in its own table row.
 */
const UsingScriptlets: React.FC<UsingScriptletsProps> = ({ movieMap }) => {
  const hasData = movieMap && Object.keys(movieMap).length > 0;

  return (
    <div className="modern-container">
      <div className="modern-card">
        {/* Page title – matches the <title> element of the JSP */}
        <h2 className="page-title">Demo - Using Map in JSP (Scriptlets)</h2>

        {/* Static description text from the original JSP */}
        <div className="description">
          Movies in the Map Object (Using JSP Scriptlets)
        </div>

        {/* Responsive table wrapper */}
        <div className="modern-table-wrapper">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Movie Title</th>
              </tr>
            </thead>
            <tbody>
              {hasData ? (
                Object.entries(movieMap!).map(([code, title]) => (
                  <tr key={code}>
                    <td>{code}</td>
                    <td>{title}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className="no-data">
                    No movies found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsingScriptlets;