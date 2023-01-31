import React from "react";

function Contact() {
  return (
    <div>
    
        <h1>Contact</h1>
        <div className="form-group">
          <label for="formGroupExampleInput">Name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input"

          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
    </div>
  );
}

export default Contact;
