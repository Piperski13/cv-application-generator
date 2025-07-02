import { useState } from "react";
import InfoTable from "../InfoTable/InfoTable";

const InfoForm = (props) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const userInformation = [
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
    console.log("Log object name: ", userInformation);
    setIsSubmitted(true);
  };

  const editHandler = (e) => {
    setIsSubmitted(false);
  };

  let formInputs = (
    <form onSubmit={handleOnSubmit}>
      {userInformation.map((info, index) => (
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
    formInputs = <InfoTable infoData={userInformation} edit={editHandler} />;
  }

  return (
    <>
      <h2>CV - generator</h2>
      {formInputs}
    </>
  );
};
export default InfoForm;
