import React from "react";

/* ==============================
   TypeScript interfaces – reflect the exact
   model attributes used in the original JSP.
   ============================== */
export interface FileInfo {
  /** Original file name as uploaded */
  originalFilename: string;
  /** MIME type of the uploaded file */
  contentType: string;
}

export interface FormDataWithFile {
  name: string;
  email: string;
  file: FileInfo;
}

/* ==============================
   Component Props – one‑to‑one mapping
   of the JSP model attributes.
   ============================== */
export interface FileUploadViewProps {
  /** Single file information (if any) */
  file?: FileInfo;
  /** Collection of files for the “multiple” section */
  files?: FileInfo[];
  /** Simple request‑param name */
  name?: string;
  /** Simple request‑param email */
  email?: string;
  /** Model‑attribute containing name, email and a file */
  formDataWithFile?: FormDataWithFile;
}

/**
 * FileUploadView – React recreation of `fileUploadView.jsp`.
 *
 * The component is **purely presentational**: it receives all
 * data via props and renders them using a modern, responsive
 * layout (modern_css design system). No internal state,
 * form handling, or API calls are introduced because the
 * original JSP contains none.
 */
const FileUploadView: React.FC<FileUploadViewProps> = ({
  file,
  files = [],
  name,
  email,
  formDataWithFile,
}) => {
  return (
    <div className="modern-container">
      {/* ----- Single File Section ----- */}
      {file && (
        <div className="modern-card">
          <h2 className="modern-card__title">Submitted File (Single)</h2>
          <div className="modern-table-wrapper">
            <table className="modern-table">
              <tbody>
                <tr>
                  <td className="modern-table__label">OriginalFileName :</td>
                  <td>{file.originalFilename}</td>
                </tr>
                <tr>
                  <td className="modern-table__label">Type :</td>
                  <td>{file.contentType}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ----- Multiple Files Section ----- */}
      {files.length > 0 && (
        <div className="modern-card">
          <h2 className="modern-card__title">Submitted Files (Multiple)</h2>
          <div className="modern-table-wrapper">
            <table className="modern-table">
              <tbody>
                {files.map((f, idx) => (
                  <React.Fragment key={idx}>
                    <tr>
                      <td className="modern-table__label">OriginalFileName :</td>
                      <td>{f.originalFilename}</td>
                    </tr>
                    <tr>
                      <td className="modern-table__label">Type :</td>
                      <td>{f.contentType}</td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ----- RequestParam Section ----- */}
      {(name !== undefined || email !== undefined || file) && (
        <div className="modern-card">
          <h2 className="modern-card__title">
            Submitted File with Data (<code>@RequestParam</code>)
          </h2>
          <div className="modern-table-wrapper">
            <table className="modern-table">
              <tbody>
                {name !== undefined && (
                  <tr>
                    <td className="modern-table__label">Name :</td>
                    <td>{name}</td>
                  </tr>
                )}
                {email !== undefined && (
                  <tr>
                    <td className="modern-table__label">Email :</td>
                    <td>{email}</td>
                  </tr>
                )}
                {file && (
                  <>
                    <tr>
                      <td className="modern-table__label">OriginalFileName :</td>
                      <td>{file.originalFilename}</td>
                    </tr>
                    <tr>
                      <td className="modern-table__label">Type :</td>
                      <td>{file.contentType}</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ----- ModelAttribute Section ----- */}
      {formDataWithFile && (
        <div className="modern-card">
          <h2 className="modern-card__title">
            Submitted File with Data (<code>@ModelAttribute</code>)
          </h2>
          <div className="modern-table-wrapper">
            <table className="modern-table">
              <tbody>
                <tr>
                  <td className="modern-table__label">Name :</td>
                  <td>{formDataWithFile.name}</td>
                </tr>
                <tr>
                  <td className="modern-table__label">Email :</td>
                  <td>{formDataWithFile.email}</td>
                </tr>
                <tr>
                  <td className="modern-table__label">OriginalFileName :</td>
                  <td>{formDataWithFile.file.originalFilename}</td>
                </tr>
                <tr>
                  <td className="modern-table__label">Type :</td>
                  <td>{formDataWithFile.file.contentType}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploadView;