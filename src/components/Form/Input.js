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

    const newFields = Object.keys(props.inputs).map((key) => ({
      label: key
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      type: "text",
    }));
    setInputFields(newFields);
  }, [props.inputs, props.edit]);

  const handleChange = (e) => {
    props.change(e);
  };

  const handleAddButton = () => {
    let newCompany = { label: "Company Name", type: "text" };
    setInputFields((prevInputs) => [...prevInputs, newCompany]);
  };

  let companyCounter = 0;
  const listItems = inputFields.map((labelInput, index) => {
    let lowerCaseLabel = labelInput.label.toLocaleLowerCase();
    let labelPlaceHolder = labelInput.label;
    let buttonPlaceHolder = "";

    if (labelInput.label.includes("Company Name")) {
      companyCounter++;
      labelPlaceHolder = `Company Name ${companyCounter}`;
      lowerCaseLabel = `company name ${companyCounter}`;
      //   labelPlaceHolder = `${labelInput.label} ${companyCounter}`;
      //   lowerCaseLabel = `${labelInput.label.toLocaleLowerCase()} ${companyCounter}`;
    }

    // console.log("Checking label:", labelInput.label);
    // console.log(
    //   "Includes 'Company Name'?",
    //   labelInput.label.includes("Company Name")
    // );

    const lastCompanyIndex = inputFields
      .map((item) => item.label)
      .map((label) => label.includes("Company Name"))
      .lastIndexOf(true);

    const isLastCompany =
      labelInput.label.includes("Company Name") && index === lastCompanyIndex;

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
