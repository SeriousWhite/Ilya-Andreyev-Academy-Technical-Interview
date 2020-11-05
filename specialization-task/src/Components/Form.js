import React, { useState } from 'react';

function Form(props) {
    const [validationMessages, setValidationMessages] = useState([]);
    const [formData, setFormData] = useState({});
    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    }
    const handleClick = (evt) => {
        validateForm();
        if (validationMessages.length > 0) {
            evt.preventDefault();
        }
    }
    const validateForm = () => {
        const { firstName, lastName, DOB, gender } = formData;
        setValidationMessages([]);
        let messages = [];

        /**
         * TODO: Implement validation of all fields.
         */
        setValidationMessages(messages);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }} >
            <form style={{ display: 'flex', flexDirection: 'column' }}>
                <label>First Name</label>
                <input value={formData.firstName || ''} onChange={handleChange} type="text" name="firstName" />
                <label>Last Name</label>
                <input value={formData.lastName || ''} onChange={handleChange} type="text" name="lastName" />
                <label>Date of Birth</label>
                <input value={formData.DOB || ''} onChange={handleChange} type="datetime-local" name="DOB" />
                <label>Gender</label>
                <div>
                    <input value="Male" checked={formData.gender === "Male"}
                        onChange={handleChange} type="radio" name="gender" />Male
                </div>
                <div>
                    <input value="Female" checked={formData.gender === "Female"}
                        onChange={handleChange} type="radio" name="gender" />Female
                    </div>
                <div>
                    <input value="None" checked={formData.gender === "None"}
                        onChange={handleChange} type="radio" name="gender" />Prefer not to say
                    </div>
                <button type="button" onClick={handleClick}>Save</button>
            </form>
            <div>{validationMessages.length > 0 && <span>Validation Summary</span>}
                <ul>
                    {validationMessages.map(vm => <li key={vm}>{vm}</li>)}
                </ul>
            </div>
        </div>);
}

export default Form;
