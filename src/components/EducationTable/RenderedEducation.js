const RenderedEducation = (props) => {
  return (
    <>
      {props.educationData.map((education, index) => (
        <>
          <tr key={`schoolName-${index}`} className="text-base/8">
            <td className="w-[170px]">{education.schoolName.nameLabel}:</td>
            <td>{education.schoolName.value}</td>
          </tr>
          <tr key={`titleOfStudy-${index}`} className="text-base/8">
            <td>{education.titleOfStudy.titleOfStudyLabel}: </td>
            <td>{education.titleOfStudy.value}</td>
          </tr>
          <tr key={`education-startDate-${index}`} className="text-base/8">
            <td>{education.startDate.startDateLabel}:</td>
            <td>{education.startDate.value}</td>
          </tr>
          <tr key={`education-endDate-${index}`} className="text-base/8">
            <td>{education.endDate.endDateLabel}:</td>
            <td>{education.endDate.value}</td>
          </tr>
        </>
      ))}
    </>
  );
};

export default RenderedEducation;
