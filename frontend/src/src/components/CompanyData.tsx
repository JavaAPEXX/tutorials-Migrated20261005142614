import React,  from "react";
import $ from "jquery";

/**
 * Model that matches the JSON‑P response from the legacy endpoint.
 */
interface Company {
  id: number | string;
  name: string;
}

/**
 * React component that reproduces the behaviour of `index.jsp`.
 * - Clicking the button triggers a JSON‑P request to the original
 *   `/companyResponseBody` endpoint.
 * - The returned data is displayed in the same format as the JSP
 *   (`<b>ID:</b> … <b>NAME:</b> …`).
 * - Errors are shown in a modern alert box.
 *
 * Presentation is modernised with the design‑system classes:
 * `.modern-container`, `.modern-card`, `.btn .btn-primary`,
 * `.alert-box`.
 */
const CompanyData: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleRequest = () => {
    // Reset previous error (if any)
    setError(null);

    $.ajax({
      url:
        "http://localhost:8080/spring-mvc-java/companyResponseBody?callback=getCompanyData",
      data: { format: "json" },
      type: "GET",
      jsonpCallback: "getCompanyData",
      dataType: "jsonp",
      error: () => {
        setError("An error has occurred");
      },
      success: (data: Company) => {
        console.log("success", data);
        // Append the new company to the list (mimics the original .append behaviour)
        setCompanies((prev) => [...prev, data]);
      },
    });
  };

  return (
    <div className="modern-container" style={{ padding: "2rem" }}>
      <div className="modern-card" style={{ maxWidth: "600px", margin: "0 auto", padding: "1.5rem" }}>
        <h2 className="modern-card-title">Company Data</h2>

        {error && (
          <div className="alert-box" role="alert" style={{ marginBottom: "1rem", color: "#721c24", backgroundColor: "#f8d7da", border: "1px solid #f5c6cb", padding: "0.75rem 1.25rem", borderRadius: "0.25rem" }}>
            {error}
          </div>
        )}

        <button
          id="ResponseBody-button"
          className="btn btn-primary"
          onClick={handleRequest}
          type="button"
        >
          Send AJAX JSON‑P request!
        </button>

        <div id="response" style={{ marginTop: "1.5rem" }}>
          {companies.map((c, idx) => (
            <div key={c.id ?? idx} style={{ marginBottom: "1rem" }}>
              <b>ID:</b> {c.id}
              <br />
              <b>NAME:</b> {c.name}
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyData;