import { useState } from "react";
import InfoTable from "../InfoTable/InfoTable";
import { SubmitButton } from "../Buttons/Buttons";

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
    <div className="">
      <div className="flex justify-center items-center">
        <h1 className="bg-blue-500 text-center p-2 mb-2 w-[275px] font-bold text-3xl rounded-2xl text-white sm:p-5 sm:mb-5 ">
          CV - generator
        </h1>
      </div>
      <h3 className="border-b-4 border-indigo-500">General Information</h3>
      <form onSubmit={handleOnSubmit}>
        {userInformation.map((info, index) => (
          <div key={index}>
            <label>{info.label}</label>
            <input
              required
              type={info.type}
              value={info.value}
              onChange={(e) => onChaneHandler(e, info.label)}
              className="input-style"
            />
          </div>
        ))}
        <SubmitButton />
      </form>
    </div>
  );

  if (isSubmitted) {
    formInputs = <InfoTable infoData={userInformation} edit={editHandler} />;
  }

  return <>{formInputs}</>;
};
export default InfoForm;
