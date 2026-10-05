import React from 'react';

interface GreetingProps {
  /** The message to display, injected by the backend controller. */
  message: string;
}

/**
 * Greeting component – renders a simple greeting message.
 *
 * The component is intentionally minimal: it only displays the
 * message passed in via props, mirroring the original JSP behaviour
 * (`<h1>Hello ${message}</h1>`). No state or side‑effects are required.
 *
 * Modern UI styling is applied using the provided design tokens:
 * - `.modern-container` centers the content.
 * - `.modern-card` gives a clean card look.
 */
const Greeting: React.FC<GreetingProps> = ({ message }) => (
  <div className="modern-container">
    <div className="modern-card">
      <h1>Hello {message}</h1>
    </div>
  </div>
);

export default Greeting;