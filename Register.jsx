import React from "react";
import { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [studentName, setStudentName] = useState("");
  const [studentRegisterNumber, setStudentRegisterNumber] = useState("");
  const [parentsName, setParentsName] = useState("");
  const [parentAddress, setParentAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [primaryConatctPerson, setPrimaryConatctPerson] = useState("");
  const [primaryContactPersonMobile, setPrimaryContactPersonMobile] =
    useState("");
  const [secondaryContactPerson, setSecondaryContactPerson] = useState("");
  const [secondaryContactPersonMobile, setSecondaryContactPersonMobile] =
    useState("");

  const handleStudentNameChange = (value) => {
    setStudentName(value);
  };
  const handleStudentRegisterNumberChange = (value) => {
    setStudentRegisterNumber(value);
  };
  const handleParentsNameChange = (value) => {
    setParentsName(value);
  };

  const handleParentAddressChange = (value) => {
    setParentAddress(value);
  };
  const handleStateChange = (value) => {
    setState(value);
  };
  const handleCountryChange = (value) => {
    setCountry(value);
  };
  const handleCityChange = (value) => {
    setCity(value);
  };
  const handleZipCodeChange = (value) => {
    setZipCode(value);
  };
  const handleEmailAddressChange = (value) => {
    setEmailAddress(value);
  };
  const handlePrimaryConatctPersonChange = (value) => {
    setPrimaryConatctPerson(value);
  };
  const handlePrimaryContactPersonMobileChange = (value) => {
    setPrimaryContactPersonMobile(value);
  };
  const handleSecondaryContactPersonChange = (value) => {
    setSecondaryContactPerson(value);
  };
  const handleSecondaryContactPersonMobileChange = (value) => {
    setSecondaryContactPersonMobile(value);
  };
  const handleSave = () => {
    const data = {
      StudentName: studentName,
      StudentRegisterNumber: studentRegisterNumber,
      ParentsName: parentsName,
      ParentAddress: parentAddress,
      City: city,
      State: state,
      ZipCode: zipCode,
      Country: country,
      EmailAddress: emailAddress,
      PrimaryConatctPerson: primaryConatctPerson,
      PrimaryContactPersonMobile: primaryContactPersonMobile,
      SecondaryContactPerson: secondaryContactPerson,
      SecondaryContactPersonMobile: secondaryContactPersonMobile,
    };
    const url = "https://localhost:44308/api/Test/Registration";
    axios
      .post(url, data)
      .then((result) => {
        if (result.data == "Data Inserted") alert("data saved");
        else alert(result.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className="register-container">
        <form className="register-form">
          <label>
            <p>Student Name</p>
            <input
              id="StudentName"
              type="text"
              onChange={(e) => handleStudentNameChange(e.target.value)}
              required
            />
          </label>
          <label>
            <p>Student Register Number</p>
            <input
              id="StudentRegisterNumber"
              type="text"
              onChange={(e) =>
                handleStudentRegisterNumberChange(e.target.value)
              }
              required
            />
          </label>
          <label>
            <p>Parent Name</p>
            <input
              id="ParentsName"
              type="text"
              onChange={(e) => handleParentsNameChange(e.target.value)}
              required
            />
          </label>
          <label>
            <p>Parent Address</p>
            <input
              id="ParentAddress"
              type="text"
              onChange={(e) => handleParentAddressChange(e.target.value)}
              required
            />
          </label>
          <label>
            <p>City</p>
            <input
              id="City"
              type="text"
              onChange={(e) => handleCityChange(e.target.value)}
              required
            />
          </label>
          <label>
            <p>State</p>
            <input
              id="State"
              type="text"
              onChange={(e) => handleStateChange(e.target.value)}
              required
            />
          </label>
          <label>
            <p>Zip Code</p>
            <input
              id="ZipCode"
              type="text"
              pattern="[0-9]{6}"
              title="Six digit zip code"
              onChange={(e) => handleZipCodeChange(e.target.value)}
              required
            />
          </label>
          <label>
            <p>Country</p>
            <input
              id="Country"
              type="text"
              onChange={(e) => handleCountryChange(e.target.value)}
              required
            />
          </label>
          <label>
            <p>Email Address</p>
            <input
              id="EmailAddress"
              type="email"
              onChange={(e) => handleEmailAddressChange(e.target.value)}
              required
            />
          </label>
          <label>
            <p>Primary Contact Person</p>
            <input
              id="PrimaryConatctPerson"
              type="text"
              onChange={(e) => handlePrimaryConatctPersonChange(e.target.value)}
              required
            />
          </label>
          <label>
            <p>Primary Contact Person Mobile</p>
            <input
              type="text"
              id="PrimaryContactPersonMobile"
              name="phone"
              pattern="[0-9]{10}"
              onChange={(e) =>
                handlePrimaryContactPersonMobileChange(e.target.value)
              }
              required
            />
          </label>
          <label>
            <p>Secondary Contact Person</p>
            <input
              id="SecondaryContactPerson"
              type="text"
              onChange={(e) =>
                handleSecondaryContactPersonChange(e.target.value)
              }
              required
            />
          </label>
          <label>
            <p>Secondary Contact Person Mobile</p>
            <input
              type="text"
              id="SecondaryContactPersonMobile"
              name="phone"
              pattern="[0-9]{10}"
              onChange={(e) =>
                handleSecondaryContactPersonMobileChange(e.target.value)
              }
              required
            />
          </label>
          <br></br>
          <button onClick={() => handleSave()} className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
};
