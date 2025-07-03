import { useState } from "react";
import InfoTable from "../InfoTable/InfoTable";

const InfoForm = (props) => {
  const [userInformation, setuserInformation] = useState([
    { label: "Name", type: "text", value: "" },
    {
      label: "Phone Number",
      type: "number",
      value: "",
    },
    { label: "E-mail", type: "email", value: "" },
  ]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const editHandler = (e) => {
    setIsSubmitted(false);
  };

  const onChaneHandler = (e, label) => {
    e.preventDefault();
    const value = e.target.value;

    setuserInformation((prevInfo) =>
      prevInfo.map((info) =>
        info.label === label ? { ...info, value: value } : info
      )
    );
  };

  let formInputs = (
    <>
      <h3>General Information</h3>
      <form onSubmit={handleOnSubmit}>
        {userInformation.map((info, index) => (
          <div key={index}>
            <label>{info.label}</label>
            <input
              required
              type={info.type}
              value={info.value}
              onChange={(e) => onChaneHandler(e, info.label)}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  );

  if (isSubmitted) {
    formInputs = <InfoTable infoData={userInformation} edit={editHandler} />;
  }

  return (
    <>
      <h1>CV - generator</h1>
      {formInputs}
    </>
  );
};
export default InfoForm;
