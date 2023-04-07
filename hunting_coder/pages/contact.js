import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  async function submitContact() {
    let name = document.body.querySelector("#name").value,
      email = document.body.querySelector("#email").value,
      feedback = document.body.querySelector("#feedback").value;
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (name == "" || email == "" || feedback == "") {
      document.querySelector("#incomplete").innerText =
        "*Please Fill Out All The Fields";
      document.querySelector("#incomplete").style.visibility = "visible";
      return;
    } else if (!regEmail.test(email)) {
      document.querySelector("#incomplete").innerText =
        "*Please Enter A Valid Email";
      document.querySelector("#incomplete").style.visibility = "visible";
      return;
    }
    let data = {
      name: name,
      email: email,
      feedback: feedback,
    };
    await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    document.getElementById("form").innerText = "Thank You For Your FeedBack!";
    document.getElementById("form").style.textAlign = "center";
    document.getElementById("form").style.fontSize = "large";
    document.getElementById("form").style.fontWeight = "500";
    document.getElementById("form").style.marginTop = "100px";
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  }

  return (
    <div
      style={{
        width: "80vw",
        margin: "auto",
        maxWidth: "800px",
      }}
      id="form"
    >
      <form>
        <div className={styles.form}>
          <label htmlFor="name" className={styles.formlabel}>
            Name
          </label>
          <input
            type="text"
            className={styles.formcontrol}
            name="name"
            id="name"
            autoFocus={true}
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="email" className={styles.formlabel}>
            Email address
          </label>
          <input
            type="email"
            className={styles.formcontrol}
            name="email"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className={styles.form} style={{ marginBottom: "0 !IMPORTANT" }}>
          <label htmlFor="feedback" className={styles.formlabel}>
            Write your opinion/concern here:
          </label>
          <textarea
            type="text"
            className={styles.formcontrol}
            name="feedback"
            id="feedback"
            style={{ minHeight: "150px" }}
          ></textarea>
          <span
            id="incomplete"
            style={{ color: "red", fontSize: "small", visibility: "hidden" }}
          >
            *Please fill out all the fields
          </span>
        </div>

        <div className={styles.form} style={{ paddingTop: "0" }}>
          <button className={styles.btn} type="button" onClick={submitContact}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
