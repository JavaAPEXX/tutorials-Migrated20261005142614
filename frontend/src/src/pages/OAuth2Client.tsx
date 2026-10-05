import React, { useEffect } from 'react';

interface TokenResponse {
  access_token?: string;
  scope?: string;
  expires_in?: number;
  refresh_token?: string;
}

interface ClientConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  scope: string;
  authorizationUri: string;
  tokenUri: string;
}

const OAuth2Client: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [config, setConfig] = useState<ClientConfig>({
    clientId: '',
    clientSecret: '',
    redirectUri: '',
    scope: '',
    authorizationUri: '',
    tokenUri: ''
  });
  const [tokenResponse, setTokenResponse] = useState<TokenResponse>({});

  useEffect(() => {
    // Simulate loading configuration from backend (MicroProfile Config equivalent)
    // In a real app, this would fetch from an API endpoint exposing these configs
    const fetchConfig = async () => {
      try {
        // Placeholder for actual API call to get client config
        // e.g., const res = await fetch('/api/oauth2/config');
        // const data = await res.json();
        // setConfig(data);
        
        // For demonstration, we keep empty strings as the source JSP would render empty if not configured
        // or we could mock the values if this were a standalone demo, but per instructions, 
        // we should not invent data. We assume the backend provides this via a standard endpoint 
        // or that the component is used in an environment where these are injected.
        
        // Since no specific API endpoint for config is provided in the backend context,
        // and the JSP uses server-side ConfigProvider, we assume a similar server-side 
        // rendering or an API that mirrors this. 
        // However, since we must generate a React component, we will structure it to 
        // accept these as props or fetch them if an endpoint exists. 
        // Given the constraints, we will leave them empty initially, 
        // assuming the backend integration will populate them or they are passed via props.
        
      } catch (e) {
        console.error('Failed to load config', e);
      }
    };

    // Check for error in URL params (common in OAuth2 flows)
    const urlParams = new URLSearchParams(window.location.search);
    const errorParam = urlParams.get('error');
    if (errorParam) {
      setError(errorParam);
    }

    fetchConfig();
  }, []);

  return (
    <div className="modern-container">
      {error && (
        <div className="alert-box alert-error">
          <strong>Error:</strong> {error}
        </div>
      )}

      <div className="modern-card">
        <h4>OAuth2 Authorization Server</h4>
        <hr />
        <p>Client Registration :</p>
        <ul>
          <li>client_id: {config.clientId}</li>
          <li>client_secret: {config.clientSecret}</li>
          <li>redirect_uri: {config.redirectUri}</li>
          <li>scope: {config.scope}</li>
        </ul>
        <p>Authorization Server :</p>
        <ul>
          <li>authorization_uri: {config.authorizationUri}</li>
          <li>token_uri: {config.tokenUri}</li>
        </ul>
      </div>

      <div className="modern-card">
        <h4>OAuth2 Client</h4>
        <hr />
        <p>Token Request :</p>
        <ul>
          <li>
            <a className="btn btn-primary" href="/authorize">
              Get Access Token
            </a>
          </li>
        </ul>

        <p>Token Response:</p>
        <ul>
          <li>access_token: {tokenResponse.access_token || ''}</li>
          <li>scope: {tokenResponse.scope || ''}</li>
          <li>Expires in (s): {tokenResponse.expires_in || ''}</li>