import RenderedInfo from "./RenderedInfo";
const InfoTable = (props) => {
  const handleEdit = (e) => {
    e.preventDefault();
    props.edit(e);
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
          <RenderedInfo infoData={props.infoData} />
        </tbody>
      </table>
      <button onClick={handleEdit}>Edit</button>
    </>
  );
};

export default InfoTable;
