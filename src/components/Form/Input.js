import { useState, useEffect } from "react";

const Input = (props) => {
  const [inputFields, setInputFields] = useState([
    { label: "Name", type: "text" },
    { label: "E-mail", type: "email" },
    { label: "Phone Number", type: "number" },
    { label: "Company Name", type: "text", groupId: 1011 },
    { label: "Position Title", type: "text", groupId: 1011 },
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

      // ✅ Extract groupId if exists (from format like "company name__1011")
      let groupId;
      const groupMatch = key.match(/__(\d+)$/);
      if (groupMatch) {
        groupId = parseInt(groupMatch[1], 10);
      }
      console.log("Key: ", key);
      console.log("groupId: ", groupId);
      return {
        label: key
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
        type,
        groupId, // ✅ Set it here
      };
    });

    setInputFields(newFields);
  }, [props.inputs, props.edit]);

  const handleChange = (e) => {
    props.change(e);
  };

  const handleAddButton = () => {
    const groupId = Date.now();
    const newFields = [
      { label: "Company Name", type: "text", groupId },
      { label: "Position Title", type: "text", groupId },
    ];
    setInputFields((prevInputs) => [...prevInputs, ...newFields]);
  };

  const handleRemoveButton = (groupId) => {
    setInputFields((prev) => prev.filter((field) => field.groupId !== groupId));
    props.removeInput(groupId);
  };
  console.log("InputFields: ", inputFields);
  let companyCounter = 0;

  const listItems = inputFields.map((labelInput, index) => {
    let lowerCaseLabel = labelInput.label.toLocaleLowerCase();
    let labelPlaceHolder = labelInput.label;
    let buttonAddPlaceHolder = "";
    let buttonRemovePlaceHolder = "";

    if (labelInput.label.includes("Company Name")) {
      companyCounter++;
      labelPlaceHolder = `Company Name ${companyCounter}`;
      lowerCaseLabel = `company name__${labelInput.groupId}`;
    } else if (labelInput.label === "Position Title") {
      labelPlaceHolder = `Position Title ${companyCounter}`;
      lowerCaseLabel = `position title__${labelInput.groupId}`;
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
          onClick={() => handleRemoveButton(labelInput.groupId)}
        >
          -
        </button>
      );
    }

    if (isNotLastCompany) {
      buttonRemovePlaceHolder = (
        <button
          type="button"
          onClick={() => handleRemoveButton(labelInput.groupId)}
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
