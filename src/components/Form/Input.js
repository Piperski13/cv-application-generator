const Input = (props) => {
  //   const inputArray = [
  //     "Name",
  //     "Email",
  //     "Number",
  //     "School Name",
  //     "Title of study",
  //     "Date of study",
  //     "Company Name",
  //     "Position title",
  //     "Main responsibilities of your jobs",
  //     "Start date",
  //     "End date"
  //   ];
  const inputArray = ["Name", "Email", "Number"];

  const handleChange = (e) => {
    props.change(e);
  };

  const listItems = inputArray.map((labelInput, index) => {
    let typeHolder = "";
    if (labelInput === "Email") {
      typeHolder = "email";
    } else if (labelInput === "Number") {
      typeHolder = "number";
    } else if (labelInput === "Date of study") {
      typeHolder = "date";
    } else typeHolder = "text";

    return (
      <div key={index}>
        <label>{labelInput}</label>
        <input
          name={labelInput.toLowerCase()}
          value={props.inputs[labelInput.toLowerCase()] || ""}
          type={typeHolder}
          onChange={handleChange}
        />
      </div>
    );
  });

  return <>{listItems}</>;
};

export default Input;
