import React, { useState } from 'react';

type JspAddBookComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const JspAddBookComponent: React.FC<JspAddBookComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});
    const { add_book_url, savedBook } = data;

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
                {(addBookSuccess) && (
                    <div>Successfully added Book with ISBN: {savedBook.isbn}</div>
                )}
        
                <c:url var="add_book_url" value="/book/addBook"/>
                <form:form action={add_book_url} method="post" modelAttribute="book">
                    <form:label path="isbn">ISBN: </form:label> <form:input type="text" path="isbn"/>
                    <form:label path="name">Book Name: </form:label> <form:input type="text" path="name"/>
                    <form:label path="author">Author Name: </form:label> <form:input path="author"/>
                    <input type="submit" value="submit"/>
                </form:form>
            </div>
        </div>
    );
};

export default JspAddBookComponent;
