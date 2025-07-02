import TableRow from "./TableRow";

const Table = (props) => {
  const handleEditClick = () => {
    props.editData(props.data);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>CV</th>
          </tr>
        </thead>
        <tbody>
          <TableRow data={props.data} />
        </tbody>
      </table>
      <button onClick={handleEditClick}>Edit</button>
    </>
  );
};

export default Table;
