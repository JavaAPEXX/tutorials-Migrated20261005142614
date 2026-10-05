import React, { useState } from 'react';

type ViewExcelComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const ViewExcelComponent: React.FC<ViewExcelComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'file': '',
    });
    const { cell, data, message, readPOIUrl, resetUrl, row, uploadFileUrl } = data;

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
                <c:url value="/uploadExcelFile" var="uploadFileUrl" />
            <c:url value="/excelProcessing" var="resetUrl" />
            <c:url value="/readPOI" var="readPOIUrl" />
        
            <form onSubmit={handleSubmit} method="post" enctype="multipart/form-data" action={uploadFileUrl}>
                <input type="file" name="file" accept=".xls,.xlsx" /> 
                <input type="submit" value="Upload file" />
            </form>
            <br />
            <form onSubmit={handleSubmit} method="GET" action={resetUrl}>
                <input type="submit" value="Reset" />
            </form>
            <br /> {message }
            <br />
            <br />
        
            <form onSubmit={handleSubmit} action={readPOIUrl }>
                <input type="submit" value="Display file content" />
            </form>
            <br />
            <br />
        
            {(Boolean(data)) && (
                <div className="modern-table-wrapper"><table className="modern-table" style="border: 1px solid black; border-collapse: collapse;">
                    {data && data.map((row: any, index: number) => (
                        <tr>
                            {row.value && row.value.map((cell: any, index: number) => (
                                <td style="border:1px solid black;height:20px;width:100px; background-color:{cell.bgColor};color:{cell.textColor}; font-weight:{cell.textWeight};font-size:{cell.textSize}pt;">
                                {cell.content}
                                </td>
                            ))}
                        </tr>
                    ))}
                </table></div>
            )}
            </div>
        </div>
    );
};

export default ViewExcelComponent;
