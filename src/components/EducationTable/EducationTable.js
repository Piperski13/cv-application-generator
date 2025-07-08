import RenderedEducation from "./RenderedEducation";
import { EditButton } from "../Buttons/Buttons";
const EducationTable = (props) => {
  const handleEdit = (e) => {
    e.preventDefault();
    props.edit(e);
  };

  return (
    <div className="flex justify-center flex-wrap mb-6 sm:pl-12 sm:w-[750px] sm:flex-nowrap sm:justify-between">
      <table>
        <thead>
          <tr>
            <th className="text-left ">Education</th>
          </tr>
          <tr>
            <td colSpan="2">
              <div className="h-1 bg-indigo-500 w-[350px] mx-auto my-2 sm:w-[575px]"></div>
            </td>
          </tr>
        </thead>
        <tbody>
          <RenderedEducation educationData={props.educationData.educations} />
        </tbody>
      </table>
      <div className="flex items-center">
        <EditButton onClick={handleEdit} />
      </div>
    </div>
  );
};

export default EducationTable;
