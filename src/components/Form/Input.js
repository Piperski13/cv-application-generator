import { useState, useEffect } from "react";

const Input = (props) => {
  const [inputFields, setInputFields] = useState([
    { label: "Name", type: "text" },
    { label: "E-mail", type: "email" },
    { label: "Phone Number", type: "number" },
    { label: "Company Name", type: "text" },
  ]);

  useEffect(() => {
    if (props.edit === false) return;

    const newFields = Object.keys(props.inputs).map((key) => {
      const normalizedKey = key.toLowerCase();
      let type = "text";
      if (normalizedKey.includes("e-mail")) {
        type = "email";
      } else if (normalizedKey.includes("phone")) {
        type = "number";
      }

      return {
        label: key
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
        type: type,
      };
    });

    setInputFields(newFields);
  }, [props.inputs, props.edit]);

  console.log("inputFields: ", inputFields);

  const handleChange = (e) => {
    props.change(e);
  };

  const handleAddButton = () => {
    let newCompany = { label: "Company Name", type: "text" };
    setInputFields((prevInputs) => [...prevInputs, newCompany]);
  };

  const handleRemoveButton = (index, lowerCaseLabel) => {
    const newIntpus = inputFields.filter((_, i) => i !== index);
    setInputFields(newIntpus);
    props.removeInput(lowerCaseLabel);
  };

  let companyCounter = 0;

  const listItems = inputFields.map((labelInput, index) => {
    let lowerCaseLabel = labelInput.label.toLocaleLowerCase();
    let labelPlaceHolder = labelInput.label;
    let buttonAddPlaceHolder = "";
    let buttonRemovePlaceHolder = "";

    if (labelInput.label.includes("Company Name")) {
      companyCounter++;
      labelPlaceHolder = `Company Name ${companyCounter}`;
      lowerCaseLabel = `company name ${companyCounter}`;
    }

    const lastCompanyIndex = inputFields
      .map((item) => item.label)
      .map((label) => label.includes("Company Name"))
      .lastIndexOf(true);

    const isLastCompany =
      labelInput.label.includes("Company Name") && index === lastCompanyIndex;

    const isNotLastCompany =
      labelInput.label.includes("Company Name") && index !== lastCompanyIndex;

    if (isLastCompany) {
      buttonAddPlaceHolder = <button onClick={handleAddButton}>+</button>;
      buttonRemovePlaceHolder = (
        <button
          type="button"
          onClick={() => handleRemoveButton(index, lowerCaseLabel)}
        >
          -
        </button>
      );
    }

    if (isNotLastCompany) {
      buttonRemovePlaceHolder = (
        <button
          type="button"
          onClick={() => handleRemoveButton(index, lowerCaseLabel)}
        >
          -
        </button>
      );
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
        {buttonAddPlaceHolder}
        {buttonRemovePlaceHolder}
      </div>
    );
  });
  return <>{listItems}</>;
};

export default Input;
