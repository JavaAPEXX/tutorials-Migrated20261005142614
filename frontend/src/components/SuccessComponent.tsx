import React from 'react';

type SuccessComponentProps = {
    data?: Record<string, any>;
};

export const SuccessComponent: React.FC<SuccessComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand" href="#"><span style="font-size: 24px;">Baeldung - Eclipse Krazo</span></span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
            </div>
        </nav>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-sm-7 mx-auto">
                    <div className="card">
        
                        <div className="card-body">
                            <h3 className="card-title text-success">User created successfully!</h3>
                        </div>
                    </div>
        
                </div>
        
            </div>
        </div>
        
        
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            </div>
        </div>
    );
};

export default SuccessComponent;
