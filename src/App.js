import { useState } from "react";

function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    setInputs({});
  };

  return (
    <>
      <h2>CV - generator</h2>
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
    </>
  );
}

export default App;
