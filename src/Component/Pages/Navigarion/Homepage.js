import React, { useState } from "react";
import "./Homepage.css";
import Second from "./Second";

function Homepage() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [checker, setChecker] = useState(true);
  const [phone, setPhone] = useState();
  const [phChecker, setPhChecker] = useState(true);

  const blurHandleEmail = () => {
    setChecker(email.includes("@"));

    if (email.trim() === "") {
      setChecker(true);
    }
  };

  const blurHandlePhone = () => {
    setPhChecker(phone.length!==10);
    
      if (phone.trim() === "") {
      setPhChecker(true);
    }
  };

  return (
    <>
      <div className="midsection">
        <div className="second-container">
          <div className="middle-word">
            For every kinds of <br /> EV
          </div>
          <div className="rfp">Request for parking</div>
        </div>
        <div className="request-box">
          <p className="req-1">Request an appointment</p>
          <p className="req-2">
            We will reach out to you as soon as possible to discuss deal with
            you
          </p>
          <div className="inputs">
            <input
              type="text"
              placeholder="Your Name"
              onChange={(e) => setText(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={blurHandleEmail}
              className={checker ? " " : "red"}
            />
            {checker ? null : <p>Please enter valid email</p>}
            <input
              type="text"
              placeholder="Mobile-Number"
              onChange={(e) => setPhone(e.target.value)}
              className={phChecker?'':'red'}
              onBlur={blurHandlePhone}
            />
            {phChecker ? null : <p>Please enter valid Number</p>}
            <textarea className="comment" type="text" placeholder="Comment" />
          </div>
          <div className="checkbox-bottom">
            <div className="topone">
              <span className="one">
                <input type="checkbox" />
              </span>
              <span className="two">
                I declare that the information provided is correct. I would like
                to receive communication about our services.
              </span>
            </div>
            <button className="button">Submit</button>
          </div>
        </div>
      </div>
      <Second />
    </>
  );
}

export default Homepage;
