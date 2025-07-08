import RenderedInfo from "./RenderedInfo";
import { EditButton } from "../Buttons/Buttons";
const InfoTable = (props) => {
  const handleEdit = (e) => {
    e.preventDefault();
    props.edit(e);
  };

  return (
    <div className="w-[750px] flex justify-between mb-6 pl-12">
      <table>
        <thead>
          <tr className="border-b-4 border-indigo-500">
            <th>General Information</th>
          </tr>
          <tr>
            <th className="pb-7"></th>
          </tr>
        </thead>
        <tbody>
          <RenderedInfo infoData={props.infoData} />
        </tbody>
      </table>
      <div className="flex items-center">
        <EditButton onClick={handleEdit} />
      </div>
    </div>
  );
};

export default InfoTable;
