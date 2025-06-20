import { useState } from "react";

const Input = (props) => {
  const [inputFields, setInputFields] = useState([
    { label: "Name", type: "text" },
    { label: "E-mail", type: "email"},
    { label: "Phone Number", type: "number"},
  ]);

  const handleChange = (e) => {
    props.change(e);
  };

  const handleAddButton = (e) => {};

  const listItems = inputFields.map((labelInput, index) => {
    const lowerCaseLabel = labelInput.label.toLocaleLowerCase();
    return (
      <div key={index}>
        <label>{labelInput.label}</label>
        <input
          name={lowerCaseLabel}
          value={props.inputs[lowerCaseLabel] || ""}
          type={labelInput.type}
          onChange={handleChange}
        />
      </div>
    );
  });
  //   const inputArray = [
  //     "Name",
  //     "Email",
  //     "Number",
  //     "School Name",
  //     "Title of study",
  //     "Date of study",
  //   ---------------------
  //     "Company Name",
  //     "Position title",
  //     "Main responsibilities of your jobs",
  //     "Start date",
  //     "End date"
  //   ---------------------
  //   ];
  return <>{listItems}</>;
};

export default Input;
