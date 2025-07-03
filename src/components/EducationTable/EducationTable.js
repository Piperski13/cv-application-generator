import RenderedEducation from "./RenderedEducation";
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
      <button onClick={handleEdit}>Edit</button>
    </>
  );
};

export default EducationTable;
