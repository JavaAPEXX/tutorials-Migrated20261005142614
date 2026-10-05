import React, { useEffect } from 'react';
import '../../public/resources/styles/app.css';
import '../../public/resources/styles/denied.css';

/**
 * DeniedPage – renders the "ACCESS DENIED!" view that was originally
 * implemented in `denied.jsp`. All functional behavior is preserved:
 *   • The page title is set to the original title.
 *   • The login link points to the application’s context path (using
 *     `process.env.PUBLIC_URL` which resolves to the deployed context root).
 *   • The original CSS files are imported so the visual styling remains
 *     identical, while modern CSS utility classes are added for a
 *     responsive, accessible layout.
 * No form, state, or custom JavaScript logic is introduced because the
 * source page does not contain any.
 */
const DeniedPage: React.FC = () => {
  // Set the document title to match the original JSP
  useEffect(() => {
    document.title = 'Spring Secured Sockets';
  }, []);

  // Load the original jQuery script (kept for fidelity, even though
  // it is not used by this page). The script is added only once.
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/resources/vendor/jquery/jquery.min.js`;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="modern-container">
      <div className="modern-card wrapper">
        <h1 className="access-denied-title">ACCESS DENIED!</h1>
        <a
          href={`${process.env.PUBLIC_URL}/login`}
          className="btn btn-primary"
        >
          Click to login.
        </a>
      </div>
    </main>
  );
};

export default DeniedPage;