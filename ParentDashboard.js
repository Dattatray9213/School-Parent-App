import React, { useState, useEffect } from "react";
import axios from "axios";

const ParentDashboard = ({ registrationId }) => {
  const path = "https://localhost:7019/api/parents/" + registrationId;
  const [parentData, setParentData] = useState({
    parentId: "",
    parentName: "",
    studentName: "",
    studentRegisterNumber: "",
    registrationId: "",
    address: "",
    state: "",
    country: "",
    city: "",
    zipCode: "",
    emailAddress: "",
    primaryContactPerson: "",
    PrimaryContactPersonMobile: "",
    secondaryContactPerson: "",
    secondaryContactPersonMobile: "",
    password: "",
    setPassword: "",
    status: "",
  });

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(path)
        .then((data) => setParentData(data.data))
        .catch((error) => console.log(error));
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParentData({
      ...parentData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://localhost:7019/api/Parents/${registrationId}`,
        parentData
      );
      alert("Data updated successfully");
    } catch (err) {
      alert("Error updating data");
    }
  };

  return (
    <div>
      <h1>Edit Parent Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="studentName"
            value={parentData.studentName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="emailAddress"
            value={parentData.emailAddress}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={parentData.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ParentDashboard;
