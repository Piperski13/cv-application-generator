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

  const handleRemoveInput = (fieldName) => {
    setInputs((prev) => {
      const newInputs = { ...prev };
      delete newInputs[fieldName];

      const updatedInputs = {};
      let companyCounter = 1;

      Object.keys(newInputs).forEach((key) => {
        if (key.startsWith("company name")) {
          updatedInputs[`company name ${companyCounter}`] = newInputs[key];
          companyCounter++;
        } else {
          updatedInputs[key] = newInputs[key];
        }
      });

      return updatedInputs;
    });
  };

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   setsubmitInputs(inputs);
  //   console.log("in handle inputs: ", inputs);
  //   setInputs({});
  // };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const fixedFields = ["name", "e-mail", "phone number"];

    // Extract all dynamic company keys like "company name 1", "company name 2", etc.
    // Then extract the numbers (1, 2, 3...) and sort them
    const companyNumbers = Object.keys(inputs)
      .filter((key) => key.startsWith("company name"))
      .map((key) => {
        const match = key.match(/company name (\d+)/);
        return match ? parseInt(match[1], 10) : null;
      })
      .filter((num) => num !== null)
      .sort((a, b) => a - b);

    const orderedFields = [...fixedFields];

    companyNumbers.forEach((num) => {
      orderedFields.push(`company name ${num}`);
      orderedFields.push(`position title ${num}`);
    });

    const orderedInputs = {};

    orderedFields.forEach((field) => {
      orderedInputs[field] = inputs[field] || "";
    });

    setsubmitInputs(orderedInputs);
    setInputs({});
  };

  const editDataHandler = (userInput) => {
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
