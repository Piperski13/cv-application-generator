import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Log object: ", name);
  };

  return (
    <>
      <h2>CV - generator</h2>
      <form onSubmit={handleOnSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
