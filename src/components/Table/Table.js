const Table = (props) => {
  console.log("Table: ", props.data);
  return (
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
  );
};

export default Table;
