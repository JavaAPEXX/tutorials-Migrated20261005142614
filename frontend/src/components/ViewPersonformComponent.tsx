import React, { useState } from 'react';

type ViewPersonformComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const ViewPersonformComponent: React.FC<ViewPersonformComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});
    const { books, countryItems, favouriteLanguageItem, fruit, jobItem } = data;

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
                <h3>Welcome, Enter the Person Details</h3>
        	
        		<form:form method="POST" action="/spring-mvc-xml/addPerson" modelAttribute="person">
        			
        			<form:errors path="*" cssClass="errorbox" element="div" />
        			
        			<div className="modern-table-wrapper"><table className="modern-table">
        				<tr>
        					<td><form:label path="name">Name</form:label></td>
        					<td><form:input path="name" /></td>
        					<td><form:errors path="name" cssClass="error" element="div"/></td>
        				</tr>
        				<tr>
        					<td><form:label path="email">E-mail</form:label></td>
        					<td><form:input type="email" path="email" /></td>
        					<td><form:errors path="email" cssClass="error" /></td>
        				</tr>
        				<tr>
        					<td><form:label path="dateOfBirth">Date of birth</form:label></td>
        					<td><form:input type="date" path="dateOfBirth" /></td>
        				</tr>
        				<tr>
        					<td><form:label path="password">Password</form:label></td>
        					<td><form:password path="password" /></td>
        					<td><form:errors path="password" cssClass="error" /></td>
        				</tr>
        				<tr>
        				    <td><form:label path="sex">Sex</form:label></td>
        				    <td>
        				        Male: <form:radiobutton path="sex" value="M"/> <br/>
        				        Female: <form:radiobutton path="sex" value="F"/>
        				    </td>
        				</tr>
        				<tr>
        				    <td><form:label path="job">Job</form:label></td>
        				    <td>
        				        <form:radiobuttons items={jobItem} path="job" /> 
        				    </td>
        				</tr>
        				<tr>
        				    <td><form:label path="country">Country</form:label></td>
        				    <td>
        				        <form:select path="country" items={countryItems} />
        				    </td>
        				</tr>
        				<tr>
        				    <td><form:label path="book">Book</form:label></td>
        				    <td>
        				        <form:select path="book">
        				        	<form:option value="-" label="--Please Select"/>
        	            			<form:options items={books} />
        	            		</form:select>
        				    </td>
        				</tr>
        				<tr>
        				    <td><form:label path="fruit">Fruit</form:label></td>
        				    <td>
        				        <form:select path="fruit" items={fruit} multiple="true"/>
        				    </td>
        				</tr>
        				<tr>
        					<td><form:label path="receiveNewsletter">Receive newsletter</form:label></td>
        					<td><form:checkbox path="receiveNewsletter" rows="3" cols="20"/></td>
        				</tr>
        				<tr>
        		            <td><form:label path="hobbies">Hobbies</form:label></td>
        		            <td>
        		                Bird watching: <form:checkbox path="hobbies" value="Bird watching"/>
        		                Astronomy: <form:checkbox path="hobbies" value="Astronomy"/>
        		                Snowboarding: <form:checkbox path="hobbies" value="Snowboarding"/>
        		            </td>
        	        	</tr>
        	        	<tr>
        		            <td><form:label path="favouriteLanguage">Favourite languages</form:label></td>
        		            <td>
        		                <form:checkboxes items={favouriteLanguageItem} path="favouriteLanguage" /> 
        		            </td>
        	        	</tr> 
        				<tr>
        					<td><form:label path="notes">Notes</form:label></td>
        					<td><form:textarea path="notes" rows="3" cols="20"/></td>
        				</tr>
        				<tr>
        					<td><form:hidden path="id" value="12345"/></td>
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

export default ViewPersonformComponent;
