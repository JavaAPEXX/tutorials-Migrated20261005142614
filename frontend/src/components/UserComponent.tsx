import React, { useState } from 'react';

type UserComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const UserComponent: React.FC<UserComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'name': '',
        'age': '',
        'email': '',
        'phone': '',
        'name': '',
    });
    const { error, errors, mvc } = data;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit?.(formData);
    };

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
                    <h3>
                        <strong>User Details</strong>
                    </h3>
                    <hr className="hr-dark"/>
                    {(errors.size() > 0) && (
                        <div className="alert alert-danger" role="alert">
                            <dl className="row">
                                <c:forEach var="error" items={errors}>
                                    <dt className="col-sm-2">{error.paramName}</dt>
                                    <dd className="col-sm-10">{error.message}</dd>
                                ))}
                            </dl>
                        </div>
                    )}
                    <form onSubmit={handleSubmit} action="{mvc.basePath}/users" method="post">
                        <div className="form-group row mt-3">
                            <label htmlFor="name" className="col-sm-3 col-form-label">Name</label>
                            <div className="col-sm-9">
                                <input name="name" type="text" className="form-control" id="name" />
                            </div>
                        </div>
                        <div className="form-group row mt-3">
                            <label htmlFor="age" className="col-sm-3 col-form-label">Age</label>
                            <div className="col-sm-9">
                                <input name="age" type="text" className="form-control" id="age" />
                            </div>
                        </div>
                        <div className="form-group row mt-3">
                            <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
                            <div className="col-sm-9">
                                <input name="email" type="email" className="form-control" id="email" />
                            </div>
                        </div>
                        <div className="form-group row mt-3">
                            <label htmlFor="phone" className="col-sm-3 col-form-label">Phone</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="phone" />
                            </div>
                        </div>
                        <hr className="hr-dark"/>
                        <div className="form-group row mt-3">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary"><strong>Create</strong></button>
                            </div>
                        </div>
                        <input type="hidden" name={mvc.csrf.name} value={mvc.csrf.token}/>
        
                    </form>
        
                </div>
        
            </div>
        </div>
        
        
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            </div>
        </div>
    );
};

export default UserComponent;
