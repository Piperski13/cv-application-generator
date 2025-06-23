import Input from "./Input";

const Form = (props) => {
  const handleChange = (e) => {
    props.change(e);
  };

  const handleOnSubmit = (e) => {
    props.submit(e);
  };

  const handleRemoveInput = (companyLabel, positionLabel) => {
    props.removeInput(companyLabel, positionLabel);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Input
        change={handleChange}
        inputs={props.inputs}
        edit={props.edit}
        removeInput={handleRemoveInput}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
