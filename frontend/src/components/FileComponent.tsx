import React, { useState } from 'react';

type FileComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const FileComponent: React.FC<FileComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'file': '',
    });
    const { message, uploadFileUrl } = data;

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
                <c:url value="/uploadFile" var="uploadFileUrl" />
        <form onSubmit={handleSubmit} method="post" enctype="multipart/form-data" action={uploadFileUrl}>
        <input type="file" name="file"/>
        <input type="submit" value="Upload file"/>
        </form>
        <br />
        {message }
        <div className="spacer-md" />
        <form onSubmit={handleSubmit} method="GET" action={uploadFileUrl} >
        <input type="submit" value="Reset" />
        </form>
            </div>
        </div>
    );
};

export default FileComponent;
