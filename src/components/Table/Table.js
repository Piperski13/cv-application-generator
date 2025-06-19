const Table = (props) => {
  const handleEditClick = () => {
    props.editData(props.data);
  };
  // make this component reactive and dyinamic foor each tr/td
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>CV</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name: {props.data.name}</td>
          </tr>
          <tr>
            <td>Email: {props.data.email}</td>
          </tr>
          <tr>
            <td>Phone: {props.data.number}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleEditClick}>Edit</button>
    </>
  );
};

export default Table;
