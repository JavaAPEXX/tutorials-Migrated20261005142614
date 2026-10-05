import React, { useState } from 'react';

type ViewFileuploadformComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const ViewFileuploadformComponent: React.FC<ViewFileuploadformComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'file': '',
        'files': '',
        'files': '',
        'files': '',
        'name': '',
        'email': '',
        'file': '',
        'name': '',
        'email': '',
        'file': '',
    });

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
                <h3>Enter The File to Upload (Single file)</h3>
        	
        		<form:form method="POST" action="/spring-mvc-java/uploadFile" enctype="multipart/form-data">
        			
        			<div className="modern-table-wrapper"><table className="modern-table">
        				<tr>
        					<td>Select a file to upload</td>
        					<td><input type="file" name="file" /></td>
        				</tr>
        				<tr>
        					<td><input type="submit" value="Submit" /></td>
        				</tr>
        			</table></div>
        			
        		</form:form>
        		
        		<br /> 
        		
        		<h3>Enter The Files to Upload (Multiple files)</h3>
        		
        		<form:form method="POST" action="/spring-mvc-java/uploadMultiFile" enctype="multipart/form-data">
        			
        			<div className="modern-table-wrapper"><table className="modern-table">
        				<tr>
        					<td>Select a file to upload</td>
        					<td><input type="file" name="files" /></td>
        				</tr>
        				<tr>
        					<td>Select a file to upload</td>
        					<td><input type="file" name="files" /></td>
        				</tr>
        				<tr>
        					<td>Select a file to upload</td>
        					<td><input type="file" name="files" /></td>
        				</tr>
        				<tr>
        					<td><input type="submit" value="Submit" /></td>
        				</tr>
        			</table></div>
        			
        		</form:form>
        		
        		<br />
        		
        		<h3>Fill the Form and Select a File (<code>@RequestParam</code>)</h3>
        		
        		<form:form method="POST" action="/spring-mvc-java/uploadFileWithAddtionalData" enctype="multipart/form-data">
        		
        			<div className="modern-table-wrapper"><table className="modern-table">
        				<tr>
        					<td>Name</td>
        					<td><input type="text" name="name" /></td>
        				</tr>
        				<tr>
        					<td>Email</td>
        					<td><input type="text" name="email" /></td>
        				</tr>
        				<tr>
        					<td>Select a file to upload</td>
        					<td><input type="file" name="file" /></td>
        				</tr>
        				<tr>
        					<td><input type="submit" value="Submit" /></td>
        				</tr>
        			</table></div>
        		
        		</form:form>
        		
        		<br />
        		
        		<h3>Fill the Form and Select a File (<code>@ModelAttribute</code>)</h3>
        		
        		<form:form method="POST" action="/spring-mvc-java/uploadFileModelAttribute" enctype="multipart/form-data">
        		
        			<div className="modern-table-wrapper"><table className="modern-table">
        				<tr>
        					<td>Name</td>
        					<td><input type="text" name="name" /></td>
        				</tr>
        				<tr>
        					<td>Email</td>
        					<td><input type="text" name="email" /></td>
        				</tr>
        				<tr>
        					<td>Select a file to upload</td>
        					<td><input type="file" name="file" /></td>
        				</tr>
        				<tr>
        					<td><input type="submit" value="Submit" /></td>
        				</tr>
        			</table></div>
        		
        		</form:form>
            </div>
        </div>
    );
};

export default ViewFileuploadformComponent;
