import { useState } from "react";
import Table from "../Table/Table";
import Form from "../Form/Form";

const Body = (props) => {
  const [inputs, setInputs] = useState({});
  const [submitInputs, setsubmitInputs] = useState({});

  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setsubmitInputs(inputs);
    setInputs({});
  };

  const editDataHandler = (userInput) => {
    setInputs(userInput);
    setsubmitInputs({});
  };

  let tableContent = <p>No current CV data</p>;
  let inputContent = (
    <Form inputs={inputs} change={handleChange} submit={handleOnSubmit} />
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
