import React from "react";
import "./Login.css";

// export const Log_in = () => {
//   //const [action, setAction]
//   return (
//     <>
//       <div className="login-container">
//         <form className="login-form">
//           <label>
//             <p>Username</p>
//             <input type="text" />
//           </label>
//           <label>
//             <p>Password</p>
//             <input className="input" type="password" />
//           </label>
//           <div>
//             <button classNmae="button" type="submit">
//               Log In
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

import { useState } from "react";

export default function Login() {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input
          onChange={handleName}
          className="input"
          value={name}
          type="text"
        />

        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

// import React, { useState } from "react";

// import Form from "react-bootstrap/Form";

// import Button from "react-bootstrap/Button";

// //import "./Login.css";

// export default function Log_in() {
//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>

//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>

//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>

//         <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Log_in = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const navigate = useNavigate();

//   const onButtonClick = () => {
//     // You'll update this function later...
//   };

//   return (
//     <div className={"mainContainer"}>
//       <div className={"titleContainer"}>
//         <div>Log In</div>
//       </div>
//       <br />
//       <div className={"inputContainer"}>
//         <input
//           value={email}
//           placeholder="Enter your email here"
//           onChange={(ev) => setEmail(ev.target.value)}
//           className={"inputBox"}
//         />
//         <label className="errorLabel">{emailError}</label>
//       </div>
//       <br />
//       <div className={"inputContainer"}>
//         <input
//           value={password}
//           placeholder="Enter your password here"
//           onChange={(ev) => setPassword(ev.target.value)}
//           className={"inputBox"}
//         />
//         <label className="errorLabel">{passwordError}</label>
//       </div>
//       <br />
//       <div className={"inputContainer"}>
//         <input
//           className={"inputButton"}
//           type="button"
//           onClick={onButtonClick}
//           value={"Log in"}
//         />
//       </div>
//     </div>
//   );
// };

// export default Log_in;
