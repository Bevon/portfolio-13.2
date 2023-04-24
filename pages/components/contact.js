import styles from "@/styles/Contact.module.css";
import { useState } from "react";

export default function Contact() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("sending...");
    if (fname === "" || email === "" || message === "") {
      alert("Please fill all the fields");
      return;
    }
    let data = {
      fname,
      email,
      message,
    };
    await fetch("/api/mail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(function (res) {
      if (res.status === 200) {
        console.log("Response Received");
        setFname(" ");
        setEmail(" ");
        setMessage(" ");
        setIsSent(true);
      }
    });
  }

  function sentNotification() {
    return (
      <div
        className={styles.sent}
        id="modal"
        style={{ display: isSent ? "" : "none" }}
      >
        <p>Message has been sent</p>
      </div>
    );
  }

  return (
    <div className={styles.contact}>
      {sentNotification()}
      <div>
        <form className={styles.form}>
          <label htmlFor="fname">Your Name:</label>
          <br />
          <input
            onChange={(e) => setFname(e.target.value)}
            value={fname}
            required
            type="text"
            id="fname"
            name="fname"
            placeholder="Your Name..."
          />
          <br />
          <label htmlFor="email">Enter your email:</label>
          <br></br>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            type="email"
            id="email"
            name="email"
            placeholder="Your Email..."
          />
          <br />
          <label htmlFor="message">Write a message: </label>
          <br />
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className={styles.textarea}
            required
            name="message"
            rows={10}
            cols={10}
            placeholder="Enter Your Message..."
          ></textarea>
          <br />
          <br />
          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            className={styles.button}
            id="modal-submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
