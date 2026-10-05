import React, { useState } from 'react';

type EmployeehomeComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const EmployeehomeComponent: React.FC<EmployeehomeComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});
    const { pageContext } = data;

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
                <h3>Welcome, Enter The Employee Details</h3>
        
        	<form:form method="POST" action="{pageContext.request.contextPath}/addEmployee" modelAttribute="employee">
        		<div className="modern-table-wrapper"><table className="modern-table">
        			<tr>
        				<td><form:label path="name">Name</form:label></td>
        				<td><form:input path="name" /></td>
        			</tr>
        			<tr>
        				<td><form:label path="id">Id</form:label></td>
        				<td><form:input path="id" /></td>
        			</tr>
        			<tr>
        				<td><form:label path="contactNumber">Contact Number</form:label></td>
        				<td><form:input path="contactNumber" /></td>
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

export default EmployeehomeComponent;
