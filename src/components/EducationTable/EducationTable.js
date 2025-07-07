import RenderedEducation from "./RenderedEducation";
import { EditButton } from "../Buttons/Buttons";
const EducationTable = (props) => {
  const handleEdit = (e) => {
    e.preventDefault();
    props.edit(e);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Education</th>
          </tr>
        </thead>
        <tbody>
          <RenderedEducation educationData={props.educationData.educations} />
        </tbody>
      </table>
      <EditButton onClick={handleEdit} />
    </>
  );
};

export default EducationTable;
