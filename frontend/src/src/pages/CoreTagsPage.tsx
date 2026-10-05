import React, { useEffect } from "react";

/**
 * React migration of `core_tags.jsp`.
 * Preserves all JSTL logic (page title, exception handling, conditional rendering,
 * external import, loops, tokenisation and URL building) while applying a modern
 * CSS layout (`.modern-container`, `.modern-card`, `.alert-box`, etc.).
 */
const CoreTagsPage: React.FC = () => {
  // ----- Page title (static in the original JSP) -----
  const pageTitle = "JSTL Core Tags Example";

  // ----- <c:catch> example -----
  const [exception, setException] = useState<Error | null>(null);

  // ----- <c:import> example (fetch external content) -----
  const [importedData, setImportedData] = useState<string | null>(null);
  const [importLoading, setImportLoading] = useState<boolean>(true);
  const [importError, setImportError] = useState<string | null>(null);

  // ----- Build URL with <c:url> and <c:param> -----
  const myURL = (() => {
    const params = new URLSearchParams({
      parameter_1: "1234",
      parameter_2: "abcd",
    });
    return `/core_tags?${params.toString()}`;
  })();

  // ----- Effect: simulate <c:catch> and fetch external data -----
  useEffect(() => {
    // Simulate the scriptlet that throws NumberFormatException
    try {
      // This will throw because "a" is not a number
      const _ = Number.parseInt("a");
    } catch (e) {
      // Ensure we store an Error instance
      setException(e instanceof Error ? e : new Error(String(e)));
    }

    // Perform the external import (equivalent to <c:import>)
    const fetchData = async () => {
      try {
        const response = await fetch("http://www.example.com");
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const text = await response.text();
        setImportedData(text);
      } catch (err) {
        setImportError(err instanceof Error ? err.message : String(err));
      } finally {
        setImportLoading(false);
      }
    };

    fetchData();
  }, []);

  // ----- Current seconds (used by <c:choose>) -----
  const seconds = new Date().getSeconds();

  // ----- Static collections for loops -----
  const foreachItems = [1, 4, 5, 6, 7, 8, 9];
  const tokenNames = ["Patrick", "Wilson", "Ibrahima", "Chris"];

  return (
    <div className="modern-container">
      {/* Page title */}
      <h1>{pageTitle}</h1>
      <p>{pageTitle}</p>

      {/* <c:catch> Example */}
      <div className="modern-card">
        <h3>&lt;c:catch&gt; Example</h3>
        {exception && (
          <p className="alert-box">
            The exception is : {exception.toString()}
            <br />
            There is an exception: {exception.message}
          </p>
        )}
      </div>

      {/* <c:choose> Example */}
      <div className="modern-card">
        <h3>&lt;c:choose&gt; Example</h3>
        <p>
          {seconds <= 30 && `${seconds} is less than 30`}
          {seconds === 30 && `${seconds} is equal to 30`}
          {seconds > 30 && `${seconds} is greater than 30`}
        </p>
      </div>

      {/* <c:import> Example */}
      <div className="modern-card">
        <h3>&lt;c:import&gt; Example</h3>
        {importLoading && <p>Loading external content…</p>}
        {importError && <p className="alert-box">Error: {importError}</p>}
        {importedData && <pre>{importedData}</pre>}
      </div>

      {/* <c:forEach> Example */}
      <div className="modern-card">
        <h3>&lt;c:forEach&gt; Example</h3>
        {foreachItems.map((i) => (
          <p key={i}>Item No. {i}</p>
        ))}
      </div>

      {/* <c:forTokens> Example */}
      <div className="modern-card">
        <h3>&lt;c:forTokens&gt; Example</h3>
        {tokenNames.map((name) => (
          <p key={name}>Name: {name}</p>
        ))}
      </div>

      {/* <c:url> and <c:param> Example */}
      <div className="modern-card">
        <h3>&lt;c:url&gt; and