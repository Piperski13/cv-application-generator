import { useState } from "react";
import Table from "../Table/Table";
import Form from "../Form/Form";

const Body = (props) => {
  const [inputs, setInputs] = useState({});
  const [editBoolean, setEditBoolean] = useState(false);
  const [submitInputs, setsubmitInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleRemoveInput = (groupId) => {
    setInputs((prev) => {
      const newInputs = { ...prev };

      Object.keys(newInputs).forEach((key) => {
        if (key.endsWith(`__${groupId}`)) {
          delete newInputs[key];
        }
      });

      return newInputs;
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const fixedKeys = ["name", "e-mail", "phone number"];
    const fixedInputs = {};
    const companyGroups = {};

    for (const [key, value] of Object.entries(inputs)) {
      if (fixedKeys.includes(key)) {
        fixedInputs[key] = value;
      } else {
        const [field, id] = key.split("__");
        if (!companyGroups[id]) companyGroups[id] = {};
        companyGroups[id][field] = value;
      }
    }

    const orderedInputs = { ...fixedInputs };

    Object.keys(companyGroups).forEach((id) => {
      const group = companyGroups[id];
      orderedInputs[`company name__${id}`] = group["company name"] || "";
      orderedInputs[`position title__${id}`] = group["position title"] || "";
    });

    setsubmitInputs(orderedInputs);
    setInputs({});
  };

  const editDataHandler = (userInput) => {
    console.log("USER INPUT EDIT: ", userInput);
    setInputs(userInput);
    setEditBoolean(true);
    setsubmitInputs({});
  };

  let tableContent = <p>No current CV data</p>;
  let inputContent = (
    <Form
      inputs={inputs}
      change={handleChange}
      submit={handleOnSubmit}
      edit={editBoolean}
      removeInput={handleRemoveInput}
    />
  );

  if (Object.keys(submitInputs).length !== 0) {
    tableContent = <Table data={submitInputs} editData={editDataHandler} />;
    inputContent = <></>;
  }

  return (
    <>
      {inputContent}
      {tableContent}
    </>
  );
};

export default Body;
