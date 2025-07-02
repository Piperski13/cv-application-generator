import RenderedInfo from "./RenderedInfo";
const Table = (props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>CV</th>
          </tr>
        </thead>
        <tbody>
          <RenderedInfo infoData={props.infoData} />
        </tbody>
      </table>
      <button>Edit</button>
    </>
  );
};

export default Table;
