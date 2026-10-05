import React, { useState, FormEvent, ChangeEvent } from "react";

/**
 * PhoneHome – functional migration of `phoneHome.jsp`.
 * Preserves:
 *   • Form submission to `/spring-mvc-basics/addValidatePhone` (POST, url‑encoded)
 *   • Conditional display of a server‑side `message`
 *   • Field‑level error display (mirrors `<form:errors>`)
 * UI modernization:
 *   • Modern CSS classes (`.modern-container`, `.modern-card`, `.form-group`, etc.)
 *   • Accessible markup (label ↔ input, proper button type)
 */
const PhoneHome: React.FC = () => {
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [fieldError, setFieldError] = useState<string>("");

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    // clear previous field error when user edits
    if (fieldError) setFieldError("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Prepare url‑encoded body as Spring MVC expects
    const body = new URLSearchParams({ phone });

    try {
      const response = await fetch("/spring-mvc-basics/addValidatePhone", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
        credentials: "same-origin", // preserve session cookies
      });

      if (response.ok) {
        // Backend may return plain text or JSON with a `message` field.
        const contentType = response.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          const data = (await response.json()) as { message?: string };
          setMessage(data.message ?? "Operation successful.");
        } else {
          const text = await response.text();
          setMessage(text);
        }
        setFieldError("");
      } else {
        // Assume validation error returns plain text or JSON with `error` field.
        const contentType = response.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          const err = (await response.json()) as { error?: string; fieldErrors?: { phone?: string } };
          setFieldError(err.fieldErrors?.phone ?? err.error ?? "Submission failed.");
        } else {
          const errText = await response.text();
          setFieldError(errText || "Submission failed.");
        }
        setMessage("");
      }
    } catch (err) {
      setFieldError("Network error – please try again.");
      setMessage("");
    }
  };

  return (
    <div className="modern-container">
      <div className="modern-card">
        <h2>Phone Number</h2>

        {/* Conditional message rendering – mirrors <c:if test="${not empty message}"> */}
        {message && (
          <div className="alert-box badge green">{message}</div>
        )}

        <form onSubmit={handleSubmit} className="modern-form">
          <div className="form-group">
            <label htmlFor="phoneInput" className="form-label">
              Phone:
            </label>
            <input
              type="text"
              id="phoneInput"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
              className="form-control"
            />
            {/* Field‑level error – mirrors <form:errors path="phone" cssClass="error" /> */}
            {fieldError && <div className="error">{fieldError}</div>}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhoneHome;