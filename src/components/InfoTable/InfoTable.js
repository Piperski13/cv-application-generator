import RenderedInfo from "./RenderedInfo";
import { EditButton } from "../Buttons/Buttons";
const InfoTable = (props) => {
  const handleEdit = (e) => {
    e.preventDefault();
    props.edit(e);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>General Information</th>
          </tr>
        </thead>
        <tbody>
          <RenderedInfo infoData={props.infoData} />
        </tbody>
      </table>
      <EditButton onClick={handleEdit} />
    </div>
  );
};

export default InfoTable;
