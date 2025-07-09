import React from "react";
const RenderedEducation = (props) => {
  return (
    <>
      {props.educationData.map((education, index) => (
        <React.Fragment key={education.educationId || index}>
          <tr key={`schoolName-${index}`} className="text-base/8">
            <td className="w-[170px] pt-10">
              {education.schoolName.nameLabel} :
            </td>
            <td className="pt-10">{education.schoolName.value}</td>
          </tr>
          <tr key={`titleOfStudy-${index}`} className="text-base/8">
            <td>{education.titleOfStudy.titleOfStudyLabel} : </td>
            <td>{education.titleOfStudy.value}</td>
          </tr>
          <tr key={`education-startDate-${index}`} className="text-base/8">
            <td>{education.startDate.startDateLabel} :</td>
            <td>{education.startDate.value}</td>
          </tr>
          <tr
            key={`education-endDate-${index}`}
            className="border-b-4 border-indigo-500 text-base/8"
          >
            <td className="pb-10">{education.endDate.endDateLabel}:</td>
            <td className="pb-10">{education.endDate.value}</td>
          </tr>
        </React.Fragment>
      ))}
    </>
  );
};

export default RenderedEducation;
