import React from 'react';

interface ResultPageProps {
  /** The message that was previously rendered by the Struts tag `<s:property value="carMessage"/>`. */
  carMessage: string;
}

const ResultPage: React.FC<ResultPageProps> = ({ carMessage }) => (
  <div className="modern-container">
    <div className="modern-card">
      <p>Hello Baeldung User</p>
      <p>You are a {carMessage}</p>
    </div>
  </div>
);

export default ResultPage;