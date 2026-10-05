import React, { useState } from 'react';

type JspHomeComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const JspHomeComponent: React.FC<JspHomeComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'search': '',
    });
    const { book, request } = data;

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
                <form onSubmit={handleSubmit} action="/?command=Search" method="POST">
                    <input type="text" id="search" name="q" />
                    <input type="submit" value="Go!" />
                </form>
                
                    <h2>{request.getParameter("message")}</h2>
                
                    <h2>Welcome to the Bookshelf!</h2>
        ))}
                
                    <hr/>
                    <p><b>{book.author}:</b></p>
                    <h3>{book.title}</h3>
                    <a href="/?command=Show&isbn={book.isbn}">More...</a>
        ))}
            </div>
        </div>
    );
};

export default JspHomeComponent;
