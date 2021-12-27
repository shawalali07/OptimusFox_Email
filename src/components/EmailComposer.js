import React, { useEffect, useState } from "react";
import EmailEditor from "./EmailEditor";
import FD from "./formData";
import "./EmailComposer.css";

const EmailComposer = (props) => {
  const [url, setUrl] = useState("");
  const [emailData, setEmailData] = useState("");
  const [image, setImage] = useState("");

  const prefixes = ["hi", " yo", " hello"];
  let emailDomain = prefixes.map((prefix) => `${prefix}@${url}`);

  const formData = new FormData();

  const prefixHandler = () => {
    emailDomain = prefixes.map((prefix) => `${prefix}@${url}`);
  };

  const handleImage = (event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      const base64data = reader.result;
      setImage(base64data);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function getEmailData(val) {
    setEmailData(val);
  }

  return (
    <div className="container">
      <div className="card">
        <h2>OptimusFox Email Generator</h2>
        <form>
          <div className="input-url">
            <input
              type="text"
              value={url}
              placeholder="Enter URL"
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="input-prefixes">
            <label>Prefixes</label>
            <input
              className="input"
              type="text"
              value={prefixes}
              onChange={prefixHandler}
            />
          </div>
        </form>
        <EmailEditor getEmailData={getEmailData} />
        <button
          className="btn-send"
          onClick={() => FD(emailDomain, emailData, image)}
        >
          Send
        </button>
        <input className="inp-file" type="file" onChange={handleImage} />
      </div>
    </div>
  );
};

export default EmailComposer;
