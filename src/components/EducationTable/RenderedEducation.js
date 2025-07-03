const RenderedEducation = (props) => {
  return (
    <>
      {props.educationData.map((education, index) => (
        <>
          <tr key={`schoolName-${index}`}>
            <td>
              {education.schoolName.nameLabel}: {education.schoolName.value}
            </td>
          </tr>
          <tr key={`titleOfStudy-${index}`}>
            <td>
              {education.titleOfStudy.titleOfStudyLabel}: {education.titleOfStudy.value}
            </td>
          </tr>
          <tr key={`education-startDate-${index}`}>
            <td>
              {education.startDate.startDateLabel}: {education.startDate.value}
            </td>
          </tr>
          <tr key={`education-endDate-${index}`}>
            <td>
              {education.endDate.endDateLabel}: {education.endDate.value}
            </td>
          </tr>
        </>
      ))}
    </>
  );
};

export default RenderedEducation;
