import { useState } from "react";

const Input = (props) => {
  const [inputFields, setInputFields] = useState([
    { label: "Name", type: "text" },
    { label: "E-mail", type: "email" },
    { label: "Phone Number", type: "number" },
    { label: "Company Name", type: "text" },
  ]);

  const handleChange = (e) => {
    props.change(e);
  };

  const handleAddButton = () => {
    let newCompany = { label: "Company Name", type: "text" };
    setInputFields((prevInputs) => [...prevInputs, newCompany]);

    console.log(inputFields);
  };

  let companyCounter = 0;

  const listItems = inputFields.map((labelInput, index) => {
    let lowerCaseLabel = labelInput.label.toLocaleLowerCase();
    let labelPlaceHolder = labelInput.label;
    let buttonPlaceHolder = "";

    if (labelInput.label === "Company Name") {
      companyCounter++;
      labelPlaceHolder = `${labelInput.label} ${companyCounter}`;
      lowerCaseLabel = `${labelInput.label.toLocaleLowerCase()} ${companyCounter}`;
    }

    const isLastCompany =
      labelInput.label === "Company Name" &&
      index ===
        inputFields.map((item) => item.label).lastIndexOf("Company Name");

    if (isLastCompany) {
      buttonPlaceHolder = <button onClick={handleAddButton}>+</button>;
    }

    return (
      <div key={index}>
        <label>{labelPlaceHolder}</label>
        <input
          name={lowerCaseLabel}
          value={props.inputs[lowerCaseLabel] || ""}
          type={labelInput.type}
          onChange={handleChange}
        />
        {buttonPlaceHolder}
      </div>
    );
  });
  return <>{listItems}</>;
};

export default Input;
