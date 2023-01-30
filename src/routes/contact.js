import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Header />
      <center>
      <h1>Contact</h1>
      <div class="form-group">
        <label for="formGroupExampleInput">Name</label>
        <div
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Example input"
          
        ></div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <div
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Message
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
      </center>
      <Footer />
    </div>
  );
}

export default Contact;
