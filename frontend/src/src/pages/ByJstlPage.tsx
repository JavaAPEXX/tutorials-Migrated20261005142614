import React, { useEffect } from 'react';

const ByJstlPage: React.FC = () => {
  // The message is set server‑side in the JSP and echoed into JavaScript.
  // It is reproduced here as a constant to preserve the original console output.
  const message = "Hello! This is Sam's page.";

  useEffect(() => {
    console.info(message);
  }, [message]);

  return (
    <div className="modern-container">
      <div className="modern-card">
        <div>Open the browser console to see the message.</div>
      </div>
    </div>
  );
};

export default ByJstlPage;