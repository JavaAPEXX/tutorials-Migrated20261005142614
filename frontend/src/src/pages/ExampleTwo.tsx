import React, { useEffect } from 'react';

const ExampleTwo: React.FC = () => {
  const greetings = [
    "What's up?",
    "Hello",
    "It's a nice day today!"
  ];
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  useEffect(() => {
    document.title = 'Java in Static Page Example';
  }, []);

  return (
    <div className="modern-container">
      <div className="modern-card">
        <h1>Java in Static Page Example</h1>
        <p>{greeting}</p>
      </div>
    </div>
  );
};

export default ExampleTwo;