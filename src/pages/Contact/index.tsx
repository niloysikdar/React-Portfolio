import { useState } from "react";

import Lottie from "react-lottie";

import styles from "./contact.module.scss";
import lottieData from "../../assets/email.json";

const contactOpen = "<Contact />";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOnchange = (e: any) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleOnsubmit = (e: any) => {
    e.preventDefault();
    console.log(contactData);
    setContactData({
      name: "",
      email: "",
      message: "",
    });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.contact}>
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <h3 className={styles.contactOpen}>{contactOpen}</h3>
          <form onSubmit={handleOnsubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={contactData.name}
              onChange={handleOnchange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={contactData.email}
              onChange={handleOnchange}
            />
            <textarea
              name="message"
              cols={30}
              rows={5}
              placeholder="Your Message"
              value={contactData.message}
              onChange={handleOnchange}
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className={styles.lottie}>
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </div>
      </div>
    </div>
  );
};

export { Contact };
