import React, { useEffect, useRef } from "react";

/**
 * React migration of `to-dom.jsp`.
 * - Renders the JSP‑generated HTML tag (`<h1>Hello</h1>`) using
 *   `dangerouslySetInnerHTML` to preserve the exact markup.
 * - Logs the rendered markup to the browser console on component mount,
 *   replicating the original `body onLoad="printTag()"` behavior.
 * - Uses the modern CSS design tokens (`.modern-container`, `.modern-card`).
 */
const ToDom: React.FC = () => {
  // The string that was originally generated on the server side.
  const jspTag = "<h1>Hello</h1>";

  // Ref to the element that will contain the rendered tag.
  const tagContainerRef = useRef<HTMLDivElement>(null);

  // Mimic the original onLoad side‑effect: print the innerHTML to console.
  useEffect(() => {
    if (tagContainerRef.current) {
      console.info(tagContainerRef.current.innerHTML);
    }
  }, []);

  return (
    <div className="modern-container">
      <div className="modern-card">
        {/* Render the raw HTML tag exactly as the JSP did. */}
        <div
          id="fromJspTag"
          ref={tagContainerRef}
          dangerouslySetInnerHTML={{ __html: jspTag }}
        />
        <div>Open the browser console to see the tags.</div>
      </div>
    </div>
  );
};

export default ToDom;