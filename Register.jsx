import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    ParentName: "",
    StudentName: "",
    StudentRegisterNumber: "",
    Address: "",
    State: "",
    Country: "",
    City: "",
    ZipCode: "",
    EmailAddress: "",
    PrimaryContactPerson: "",
    PrimaryContactPersonMobile: "",
    SecondaryContactPerson: "",
    SecondaryContactPersonMobile: "",
    Status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:7019/api/Parents/AddParent",
        formData
      );

      console.log(response.data);
      alert("Submitted!");
      //alert("Youre registration is "`${RegistrationId}`);
    } catch (error) {
      console.error(
        "Registration Failed",
        error.response?.data || error.message
      );
      alert("There was an error registering the parent!");
    }
  };

  return (
    <div className="form-container">
      <h2>Parent Registration Form</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <input
          type="text"
          name="ParentName"
          value={formData.ParentName}
          onChange={handleChange}
          placeholder="Parent Name"
          className="form-input"
        />
        <input
          type="text"
          name="StudentName"
          value={formData.StudentName}
          onChange={handleChange}
          placeholder="Student Name"
          className="form-input"
        />
        <input
          type="text"
          name="StudentRegisterNumber"
          value={formData.StudentRegisterNumber}
          onChange={handleChange}
          placeholder="Student Register Number"
          className="form-input"
        />
        <input
          type="text"
          name="Address"
          value={formData.Address}
          onChange={handleChange}
          placeholder="Address"
          className="form-input"
        />
        <input
          type="text"
          name="State"
          value={formData.State}
          onChange={handleChange}
          placeholder="State"
          className="form-input"
        />
        <input
          type="text"
          name="Country"
          value={formData.Country}
          onChange={handleChange}
          placeholder="Country"
          className="form-input"
        />
        <input
          type="text"
          name="City"
          value={formData.City}
          onChange={handleChange}
          placeholder="City"
          className="form-input"
        />
        <input
          type="text"
          name="ZipCode"
          value={formData.ZipCode}
          onChange={handleChange}
          placeholder="Zip Code"
          className="form-input"
        />
        <input
          type="email"
          name="EmailAddress"
          value={formData.EmailAddress}
          onChange={handleChange}
          placeholder="Email Address"
          className="form-input"
        />
        <input
          type="text"
          name="PrimaryContactPerson"
          value={formData.PrimaryContactPerson}
          onChange={handleChange}
          placeholder="Primary Contact Person"
          className="form-input"
        />
        <input
          type="text"
          name="PrimaryContactPersonMobile"
          value={formData.PrimaryContactPersonMobile}
          onChange={handleChange}
          placeholder="Primary Contact Person Mobile"
          className="form-input"
        />
        <input
          type="text"
          name="SecondaryContactPerson"
          value={formData.SecondaryContactPerson}
          onChange={handleChange}
          placeholder="Secondary Contact Person"
          className="form-input"
        />
        <input
          type="text"
          name="SecondaryContactPersonMobile"
          value={formData.SecondaryContactPersonMobile}
          onChange={handleChange}
          placeholder="Secondary Contact Person Mobile"
          className="form-input"
        />
        <input
          type="text"
          name="Status"
          value={formData.Status}
          onChange={handleChange}
          placeholder="Status"
          className="form-input"
        />

        <button type="submit" className="form-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
