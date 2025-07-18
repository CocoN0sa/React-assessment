import React, { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    console.log("Contact Form Submitted:");
    console.log("Name:", form.name);
    console.log("Email:", form.email);
    console.log("Message:", form.message);

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className={styles.contact} id="Contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
