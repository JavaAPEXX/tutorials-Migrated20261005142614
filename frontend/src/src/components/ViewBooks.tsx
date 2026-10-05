import React from 'react';

/**
 * Type definition for a Book as represented in the legacy JSP.
 * The JSP expects the following properties for each book:
 *   - isbn
 *   - name
 *   - author
 */
export interface Book {
  isbn: string;
  name: string;
  author: string;
}

/**
 * Props for the ViewBooks component.
 * The legacy JSP receives a request attribute named `books`.
 * In React we expose the same data via a required `books` prop.
 */
interface ViewBooksProps {
  /** Array of books to display */
  books: Book[];
}

/**
 * ViewBooks – renders a responsive, modern‑styled table of books.
 * The component mirrors the exact structure of `view-books.jsp`
 * while applying the modern CSS design system described in the
 * migration configuration.
 */
const ViewBooks: React.FC<ViewBooksProps> = ({ books }) => {
  return (
    <div className="modern-container">
      <div className="modern-card">
        <h2 className="card-title">View Books</h2>

        <div className="modern-table-wrapper">
          <table className="modern-table">
            <thead>
              <tr>
                <th>ISBN</th>
                <th>Name</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.isbn ?? `${book.name}-${book.author}`}>
                  <td>{book.isbn}</td>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty state handling – matches legacy behavior of rendering an empty tbody */}
        {books.length === 0 && (
          <div className="alert-box">
            No books found.
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewBooks;