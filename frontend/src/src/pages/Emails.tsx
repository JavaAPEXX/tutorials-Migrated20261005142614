import React from 'react';
import './Emails.css'; // optional: place the modern CSS classes here

const Emails: React.FC = () => {
  return (
    <div className="modern-container">
      <div className="modern-card">
        <h4 className="form-title">
          Select any of the options below to send sample email:
        </h4>

        {/* The original JSP used a GET form with individual `formaction` on each submit button.
            Replicating the same behaviour in React by keeping a native HTML form. */}
        <form method="get" style={{ width: '200px' }}>
          <fieldset
            style={{
              border: 'none',
              paddingLeft: 0,
              paddingTop: 0,
            }}
          >
            <div className="modern-table-wrapper">
              <table className="modern-table">
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="submit"
                        formaction="mail/send"
                        value="Send Simple Email"
                        className="btn btn-primary"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="submit"
                        formaction="mail/sendTemplate"
                        value="Send Email Using Text Template"
                        className="btn btn-primary"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="submit"
                        formaction="mail/sendAttachment"
                        value="Send Email With Attachment"
                        className="btn btn-primary"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="submit"
                        formaction="mail/sendHtml"
                        value="Send HTML Email"
                        className="btn btn-primary"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Emails;