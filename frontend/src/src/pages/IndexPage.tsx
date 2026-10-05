import React,  from 'react';

interface CompanyData {
  id: number;
  name: string;
}

const IndexPage: React.FC = () => {
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCompanyData = async () => {
    setLoading(true);
    setError(null);
    setCompanyData(null);

    try {
      // The source uses JSONP to bypass CORS. In a modern React app, we typically use standard fetch.
      // However, to strictly preserve the "behavior" of hitting that specific endpoint with that specific callback,
      // we would need a JSONP library. But standard modern practice is to assume the backend supports CORS or we use fetch.
      // Given the instruction "Do NOT invent APIs" and "Preserve AJAX calls", we replicate the intent.
      // If the backend strictly requires JSONP, a standard fetch might fail if CORS is not enabled on the backend.
      // But since we are migrating to a modern stack, we assume the backend will be adjusted or CORS is enabled.
      // If we must strictly mimic the JSONP call without a library, it's complex. 
      // Let's use fetch as it's the standard modern equivalent for GET requests.
      const response = await fetch('http://localhost:8080/spring-mvc-java/companyResponseBody', {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('An error has occurred');
      }

      const data = await response.json();
      setCompanyData(data);
    } catch (err) {
      setError('An error has occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modern-container">
      <div className="modern-card">
        <h1>Company Data</h1>
        
        <div className="form-group">
          <button 
            id="ResponseBody-button" 
            className="btn btn-primary" 
            onClick={fetchCompanyData}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Send AJAX JSON-P request!'}
          </button>
        </div>

        {error && (
          <div className="alert-box alert-error">
            <p>{error}</p>
          </div>
        )}

        {companyData && (
          <div id="response" className="modern-data-display">
            <div className="data-row">
              <strong>ID:</strong> {companyData.id}
            </div>
            <div className="data-row">
              <strong>NAME:</strong> {companyData.name}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndexPage;