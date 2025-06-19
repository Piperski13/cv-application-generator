import { useState } from "react";
import Table from "./components/Table/Table";

function App() {
  const [inputs, setInputs] = useState({});
  const [submitInputs, setsubmitInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setsubmitInputs(inputs);
    setInputs({});
  };

  let tableContent = <p>No current CV data</p>;

  let inputContent = (
    <form onSubmit={handleOnSubmit}>
      <label>Name</label>
      <input
        name="name"
        value={inputs.name || ""}
        type="text"
        onChange={handleChange}
      />
      <label>E-mail</label>
      <input
        name="email"
        value={inputs.email || ""}
        type="email"
        onChange={handleChange}
      />
      <label>Phone</label>
      <input
        name="number"
        value={inputs.number || ""}
        type="number"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );

  if (Object.keys(submitInputs).length !== 0) {
    tableContent = <Table data={submitInputs} />;
    inputContent = <></>;
  }

  return (
    <>
      <h2>CV - generator</h2>
      {inputContent}
      {tableContent}
    </>
  );
}

export default App;
