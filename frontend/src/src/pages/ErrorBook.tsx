import React from "react";

export interface ErrorBookProps {
  /** Reference identifier (originally `${ref}`) */
  reference?: string;
  /** Error message (originally `${message}`) */
  message?: string;
  /** Object description (originally `${object}`) */
  objectInfo?: string;
}

/**
 * Functional replica of `error-book.jsp`.
 * Displays the reference, error message and object information
 * using the modern CSS design system.
 */
const ErrorBook: React.FC<ErrorBookProps> = ({
  reference = "",
  message = "",
  objectInfo = "",
}) => (
  <div className="modern-container">
    <div className="modern-card">
      <div className="alert-box">
        <p>Reference: {reference}</p>
        <p>Error Message: {message}</p>
        <p>Object: {objectInfo}</p>
      </div>
    </div>
  </div>
);

export default ErrorBook;