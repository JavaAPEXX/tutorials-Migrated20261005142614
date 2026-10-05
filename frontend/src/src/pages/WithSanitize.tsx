import React, { useEffect } from 'react';

interface WithSanitizeProps {
  input?: string;
}

const WithSanitize: React.FC<WithSanitizeProps> = ({ input }) => {
  const [paramValue, setParamValue] = useState<string>(input || '');

  useEffect(() => {
    if (input !== undefined) {
      setParamValue(input);
    }
  }, [input]);

  return (
    <div className="modern-container">
      <div className="modern-card">
        <h1 className="card-title">Sanitized request parameter</h1>
        <div className="card-content">
          <p className="description-text">
            The text below comes from request parameter "input":
          </p>
          <div className="parameter-value">
            {paramValue}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithSanitize;