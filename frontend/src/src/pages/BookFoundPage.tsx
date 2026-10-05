import React, { useState, FormEvent, ChangeEvent } from "react";

export interface Book {
  /** Title of the book */
  title: string;
  /** Author name */
  author: string;
  /** ISBN used as hidden identifier */
  isbn: string;
  /** Price displayed on the submit button (e.g. 12.99) */
  price: number | string;
}

/**
 * Props for the BookFoundPage component.
 * The parent component must supply the list of books that were originally
 * placed in the request attribute `books` by the legacy JSP.
 */
interface BookFoundPageProps {
  /** Array of books to display */
  books: Book[];
}

/**
 * BookFoundPage – functional migration of `book-found.jsp`.
 * Preserves the original form behaviour (POST to `/?command=Order` with
 * `quantity` and `isbn`) while applying a modern, responsive layout.
 */
const BookFoundPage: React.FC<BookFoundPageProps> = ({ books }) => {
  // Store quantity per ISBN; initialise each with "1" (the default in the JSP)
  const [quantities, setQuantities] = useState<Record<string, string>>(
    () =>
      books.reduce((acc, book) => {
        acc[book.isbn] = "1";
        return acc;
      }, {} as Record<string, string>)
  );

  // Simple alert state for success / error feedback
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleQuantityChange = (isbn: string) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuantities((prev) => ({
      ...prev,
      [isbn]: value,
    }));
  };

  const handleSubmit = (isbn: string) => async (e: FormEvent) => {
    e.preventDefault();

    const quantity = quantities[isbn] ?? "1";

    // Build URL‑encoded body as the original JSP used a classic form post
    const body = new URLSearchParams();
    body.append("quantity", quantity);
    body.append("isbn", isbn);

    try {
      const response = await fetch("/?command=Order", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
        credentials: "include", // preserve session cookies
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `HTTP ${response.status}`);
      }

      setAlert({ type: "success", message: "Order placed successfully!" });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unexpected error";
      setAlert({ type: "error", message });
    }
  };

  return (
    <div className="modern-container">
      <h1>Our Bookshelf contains following titles:</h1>

      {alert && (
        <div className={`alert-box ${alert.type === "success" ? "alert-success" : "alert-error"}`}>
          {alert.message}
        </div>
      )}

      {books.map((book) => (
        <div key={book.isbn} className="modern-card">
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>

          <form
            className="book-order-form"
            onSubmit={handleSubmit(book.isbn)}
            action="/?command=Order"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor={`quantity-${book.isbn}`} className="form-label">
                Quantity:
              </label>
              <input
                type="text"
                id={`quantity-${book.isbn}`}
                name="quantity"
                className="form-control"
                value={quantities[book.isbn] ?? "1"}
                required
                onChange={handleQuantityChange(book.isbn)}
              />
            </div>

            {/* Hidden ISBN field – required by the legacy endpoint */}
            <input type="hidden" name="isbn" value={book.isbn} />

            <button type="submit" className="btn btn-primary">
              Buy it: {book.price}$
            </button>

            <a href="/?command=Home" className="btn btn-secondary" style={{ marginLeft: "0.5rem" }}>
              Go back...
            </a>
          </form>
        </div>
      ))}

      {/* The original JSP included `shopping-cart-hint.jsp` and `visitor-counter.jsp`.
          Those fragments are omitted here because their content is not part of the
          supplied source. If needed, they can be re‑implemented as separate components
          and imported here. */}
    </div>
  );
};

export default BookFoundPage;