const TableRow = (props) => {
  const data = Object.entries(props.data);
  console.log("Data TableRow: ", props.data);
  const tableRowItems = data.map((tableRow, index) => {
    const capitalized =
      tableRow[0].charAt(0).toUpperCase() + tableRow[0].slice(1);
    return (
      <tr key={index}>
        <td>
          {capitalized}: {tableRow[1]}
        </td>
      </tr>
    );
  });
  return <>{tableRowItems}</>;
};

export default TableRow;
