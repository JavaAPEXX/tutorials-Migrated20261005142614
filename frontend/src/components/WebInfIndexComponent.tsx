import React, { useState } from 'react';

type WebInfIndexComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const WebInfIndexComponent: React.FC<WebInfIndexComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'theme': '',
    });
    const { document } = data;

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
                <header>
                    <h1>Themed Application</h1>
                    <hr />
                </header>
                <section>
                    <h2>Spring MVC Theme Demo</h2>
                    <security:authorize access="isAuthenticated()">
                        <h4>User : <security:authentication property="principal.username" /></h4>
                    </security:authorize>
                    <form onSubmit={handleSubmit} action="<c:url value='/'/>" method="POST" name="themeChangeForm" id="themeChangeForm">
                        <div>
                            <h4>
                                Change Theme
                            </h4>
                        </div>
                        <select id="theme" name="theme" onChange="submitForm()">
                            <option value="">Reset</option>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </form>
                </section>
        
                <section>
                    <form onSubmit={handleSubmit} action="<c:url value='/logout.do'/>" method="POST" name="logoutForm">
                        <button type="submit" name="submit">Sign Out</button>
                    </form>
                </section>
        
                <script>
                    function submitForm() {
                      document.themeChangeForm.submit();
                    }
                </script>
            </div>
        </div>
    );
};

export default WebInfIndexComponent;
