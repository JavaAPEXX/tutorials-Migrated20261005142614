import React from 'react';

/**
 * Props definition – mirrors the fields used in the original JSP.
 * The backend model supplies at least `title`, `author` and `price`.
 */
export interface Book {
  /** Book title */
  title: string;
  /** Book author */
  author: string;
  /** Book price – can be a number or a formatted string */
  price: number | string;
}

/**
 * BookFound – functional migration of `book-found.jsp`.
 *
 * The component is a pure presentational view: it receives a `book`
 * object (populated by the existing backend) and renders the same
 * markup that the JSP produced, upgraded with the modern CSS design
 * tokens (`.modern-container`, `.modern-card`, `.btn`, etc.).
 *
 * No local state, forms, or side‑effects are introduced because the
 * original page contained no form elements or JavaScript behavior.
 */
const BookFound: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <div className="modern-container" style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <div className="modern-card" style={{ maxWidth: '600px', width: '100%', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
        <p className="mb-2">Our Bookshelf contains this title:</p>

        <h2 className="book-title" style={{ margin: '0.5rem 0' }}>
          {book.title}
        </h2>

        <p className="book-author" style={{ marginBottom: '1rem' }}>
          Author: {book.author}
        </p>

        {/* The original JSP used an <input type="submit" /> without a form.
            It is rendered here as a primary button for better accessibility
            and visual consistency. */}
        <button
          type="button"
          className="btn btn-primary"
          style={{ cursor: 'pointer' }}
        >
          Buy it: {book.price}$
        </button>
      </div>
    </div>
  );
};

export default BookFound;