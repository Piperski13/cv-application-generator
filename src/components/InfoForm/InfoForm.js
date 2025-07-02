import { useState } from "react";
import Table from "../InfoTable/InfoTable";

const InfoForm = (props) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const staticInfo = [
    { label: "Name", type: "text", value: name, setter: setName },
    {
      label: "Phone Number",
      type: "number",
      value: phoneNumber,
      setter: setPhoneNumber,
    },
    { label: "E-mail", type: "email", value: email, setter: setEmail },
  ];

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Log object name: ", staticInfo);
    setIsSubmitted(true);
  };

  let formInputs = (
    <form onSubmit={handleOnSubmit}>
      {staticInfo.map((info, index) => (
        <div key={index}>
          <label>{info.label}</label>
          <input
            type={info.type}
            value={info.value}
            onChange={(e) => info.setter(e.target.value)}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );

  if (isSubmitted) {
    formInputs = <Table infoData={staticInfo} />;
  }

  return (
    <>
      <h2>CV - generator</h2>
      {formInputs}
    </>
  );
};
export default InfoForm;
