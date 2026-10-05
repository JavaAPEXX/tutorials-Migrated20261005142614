import React from "react";

interface ErrorPageProps {
  /** Message supplied by the backend (e.g., “Http Error Code : 404. Resource not found”) */
  errorMsg?: string;
}

/**
 * React representation of the legacy `errorPage.jsp`.
 * Displays the error message inside a modern, responsive card.
 * No internal state or side‑effects are required because the original JSP
 * receives the message from the server model.
 */
const ErrorPage: React.FC<ErrorPageProps> = ({ errorMsg = "An unexpected error occurred." }) => {
  return (
    <div className="modern-container" style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <div className="modern-card" style={{ maxWidth: "600px", width: "100%" }}>
        <div className="alert-box" role="alert" style={{ padding: "1.5rem", backgroundColor: "#f8d7da", color: "#721c24", borderRadius: "4px" }}>
          <h1 style={{ margin: 0, fontSize: "1.5rem", textAlign: "center" }}>{errorMsg}</h1>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;