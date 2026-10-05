import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * React migration of `core_tags_redirect.jsp`.
 * The original JSP sets a page title via JSTL and performs a server‑side redirect
 * to `/core_tags`. This component reproduces that behavior on the client:
 *   1. Sets the document title to the same value.
 *   2. Navigates to the target route immediately after mounting.
 *
 * No forms, tables, or custom scripts exist in the source, so no additional
 * state or handlers are generated.
 */
const CoreTagsRedirect: React.FC = () => {
  const navigate = useNavigate();

  // Title defined in the original JSP via <c:set value="JSTL Core Tags Examples" var="pageTitle"/>
  const pageTitle = "JSTL Core Tags Examples";

  useEffect(() => {
    // Preserve the original page title
    document.title = pageTitle;

    // Perform the redirect that the JSP originally executed
    navigate("/core_tags", { replace: true });
  }, [navigate]);

  // Optional minimal UI while the redirect occurs (will be very brief)
  return (
    <div className="modern-container">
      <div className="modern-card">
        <p>Redirecting to Core Tags...</p>
      </div>
    </div>
  );
};

export default CoreTagsRedirect;