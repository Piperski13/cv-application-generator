import RenderedEducation from "./RenderedEducation";
import { EditButton } from "../Buttons/Buttons";
const EducationTable = (props) => {
  const handleEdit = (e) => {
    e.preventDefault();
    props.edit(e);
  };

  return (
    <div className="w-[750px] flex justify-between mb-6 pl-12">
      <table>
        <thead>
          <tr className="border-b-4 border-indigo-500">
            <th className="text-left">Education</th>
          </tr>
          <tr>
            <th className="pb-7"></th>
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
