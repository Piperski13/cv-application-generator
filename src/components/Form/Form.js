const Form = (props) => {
  const handleChange = (e) => {
    props.change(e);
  };

  const handleOnSubmit = (e) => {
    props.submit(e);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label>Name</label>
      <input
        name="name"
        value={props.inputs.name || ""}
        type="text"
        onChange={handleChange}
      />
      <label>E-mail</label>
      <input
        name="email"
        value={props.inputs.email || ""}
        type="email"
        onChange={handleChange}
      />
      <label>Phone</label>
      <input
        name="number"
        value={props.inputs.number || ""}
        type="number"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
