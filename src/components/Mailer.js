import React from "react";
import emailjs from "emailjs-com";
export default function Mailer() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(
      "service_ie6326q",
      "template_57cywx5",
      e.target,
      "user_yJDzfxLC5JDmpLP7t0z9V"
    ).then(res=>{
        console.log(res);
    }).catch(err=> console.log(err));
  }
  return (
    <div className="container" style={{ marginTop: "50px", width: "50%" }}>
      <h1 style={{ marginTop: "25px" }}>Contact Form</h1>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label>NAME</label>
        <input type="text" name="name" className="form-control" />

        <label>EMAIL</label>
        <input type="email" name="user_email" className="form-control" />

        <label>MESSAGE</label>
        <textarea name="message" row="4" className="form-control" />

        <input
          type="submit"
          value="Send"
          className="btn "
          style={{
            marginTop: "30px",
            width: "40%",
            background: "gray",
            border: "none",
            height: "30px",
            float: "right",
            fontSize: "15px",
          }}
        />
      </form>
    </div>
  );
}
