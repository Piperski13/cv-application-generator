import RenderedInfo from "./RenderedInfo";
import { EditButton } from "../Buttons/Buttons";
const InfoTable = (props) => {
  const handleEdit = (e) => {
    e.preventDefault();
    props.edit(e);
  };

  return (
    <div className="flex justify-center flex-wrap mb-6 sm:pl-12 sm:w-[750px] sm:flex-nowrap sm:justify-between">
      <table>
        <thead>
          <tr>
            <th className="whitespace-nowrap">General Information</th>
          </tr>
          <tr>
            <td colSpan="2">
              <div className="h-1 bg-indigo-500 w-[350px] mx-auto my-2 sm:w-[575px]"></div>
            </td>
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
        <EditButton onClick={handleEdit} hide={props.hide} />
      </div>
    </div>
  );
};

export default InfoTable;
