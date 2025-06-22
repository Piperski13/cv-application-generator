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
    // console.log("inputs: ", inputs);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setsubmitInputs(inputs);
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
