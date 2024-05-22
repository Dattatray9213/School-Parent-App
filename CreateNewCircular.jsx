import React from "react";
import "./CreateNewCircular.css";

export default function CreateNewCircular() {
  return (
    <>
      <div className="whole-page-container">
        <div className="main-container">
          <div className="create-new-circular-container">
            <h1>Create new Circular</h1>
          </div>
          <div className="main-text-circular-container">
            <div className="Circular-title">
              <input
                type="text"
                name="circular-title"
                placeholder="Circular heading"
              />
            </div>
            <div className="Circular-text">
              <input
                type="text"
                name="create-circular"
                placeholder="Write your circular"
              />
            </div>
            <br></br>
            <div>
              <div className="clr-poasted-by">
                <input type="text" name="staff-name" placeholder="Staff Name" />
              </div>
              <div className="posted-date ">
                <input type="Date" />
              </div>
            </div>
          </div>
          <div className="submit-circular">
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
      <div className="circular-main-container"></div>
    </>
  );
}



import React from "react";
import "./CreateNewCircular.css";

export default function CreateNewCircular() {
  return (
    <>
      <div className="circular-main-container">
        <div className="create-new-circular-container">
          <h1>Create new Circular</h1>
        </div>
        <div className="main-text-circular-container">
          <div className="Circular-title">
            <input
              type="text"
              name="circular-title"
              placeholder="Circular heading"
            />
          </div>
          <div className="Circular-text">
            <input
              type="text"
              name="create-circular"
              placeholder="Write your circular"
            />
          </div>
          <br></br>
          <div className="circular-bottom">
            <div className="clr-poasted-by">
              <input type="text" name="staff-name" placeholder="Staff Name" />
            </div>
            <div className="posted-date ">
              <input type="Date" />
            </div>
          </div>
        </div>
        <div className="submit-circular">
          <button type="submit">Submit</button>
        </div>
      </div>
    </>
  );
}
