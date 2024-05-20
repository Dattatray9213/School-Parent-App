import React, { useState } from 'react';
import axios from 'axios';

const ParentRegistrationForm = () => {
    const [formData, setFormData] = useState({
        ParentName: '',
        StudentName: '',
        StudentRegisterNumber: '',
        Address: '',
        State: '',
        Country: '',
        City: '',
        ZipCode: '',
        EmailAddress: '',
        PrimaryContactPerson: '',
        PrimaryContactPersonMobile: '',
        SecondaryContactPerson: '',
        SecondaryContactPersonMobile: '',
        Status: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7183/api/Parents', formData);
           
            console.log(response.data);
            alert('Registration successful');
        } catch (error) {
            console.error('Registration Failed', error.response?.data || error.message);
            alert('There was an error registering the parent!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="ParentName" value={formData.ParentName} onChange={handleChange} placeholder="Parent Name" />
            <input type="text" name="StudentName" value={formData.StudentName} onChange={handleChange} placeholder="Student Name" />
            <input type="text" name="StudentRegisterNumber" value={formData.StudentRegisterNumber} onChange={handleChange} placeholder="Student Register Number"/>
            <input type="text" name="Address" value={formData.Address} onChange={handleChange} placeholder="Address" />
            <input type="text" name="State" value={formData.State} onChange={handleChange} placeholder="State"  />
            <input type="text" name="Country" value={formData.Country} onChange={handleChange} placeholder="Country"  />
            <input type="text" name="City" value={formData.City} onChange={handleChange} placeholder="City" />
            <input type="text" name="ZipCode" value={formData.ZipCode} onChange={handleChange} placeholder="Zip Code"  />
            <input type="email" name="EmailAddress" value={formData.EmailAddress} onChange={handleChange} placeholder="Email Address" />
            <input type="text" name="PrimaryContactPerson" value={formData.PrimaryContactPerson} onChange={handleChange} placeholder="Primary Contact Person" />
            <input type="text" name="PrimaryContactPersonMobile" value={formData.PrimaryContactPersonMobile} onChange={handleChange} placeholder="Primary Contact Person Mobile" />
            <input type="text" name="SecondaryContactPerson" value={formData.SecondaryContactPerson} onChange={handleChange} placeholder="Secondary Contact Person" />
            <input type="text" name="SecondaryContactPersonMobile" value={formData.SecondaryContactPersonMobile} onChange={handleChange} placeholder="Secondary Contact Person Mobile" />
            <input type="text" name="Status" value={formData.Status} onChange={handleChange} placeholder="Status" />

            <button type="submit">Register</button>
        </form>
    );
};

export default ParentRegistrationForm;
