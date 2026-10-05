import React from "react";
import "./ImageDownload.css";

const ImageDownload: React.FC = () => (
  <div className="modern-container">
    <div className="modern-card">
      <h1 className="modern-title">Image download examples</h1>
      <ul className="modern-list">
        <li className="modern-list-item">
          <a className="btn btn-primary" href="/image-manual-response">
            Image manually add to response
          </a>
        </li>
        <li className="modern-list-item">
          <a className="btn btn-primary" href="/image-byte-array.jpg">
            Image Download <i>byte[]</i> Example
          </a>
        </li>
        <li className="modern-list-item">
          <a className="btn btn-primary" href="/image-response-entity.jpg">
            Image Download <i>ResponseEntity</i> Example
          </a>
        </li>
        <li className="modern-list-item">
          <a className="btn btn-primary" href="/image-resource.jpg">
            Image Download <i>Resource</i> Example
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default ImageDownload;