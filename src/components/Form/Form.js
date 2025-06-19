import Input from "./Input";

const Form = (props) => {
  const handleChange = (e) => {
    props.change(e);
  };

  const handleOnSubmit = (e) => {
    props.submit(e);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Input change={handleChange} inputs={props.inputs} />
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
