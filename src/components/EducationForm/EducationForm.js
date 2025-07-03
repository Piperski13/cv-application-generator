import { useState } from "react";
import EducationTable from "../EducationTable/EducationTable";
// education: [
//     { educationId: 1011, schoolName: "levi", titleOfStudy: "Software",
//          startDate: "may", endDate:"june" },
//     ...
//   ]
const EducationForm = (props) => {
  const [educationInformation, setEducationInformation] = useState({
    educations: [
      {
        educationId: Date.now(),
        schoolName: {
          value: "",
          nameLabel: "School Name",
          name: "schoolname",
          type: "text",
        },
        titleOfStudy: {
          value: "",
          titleOfStudyLabel: "Title Of Study",
          name: "titleofstudy",
          type: "text",
        },
        startDate: {
          value: "",
          startDateLabel: "Start Date",
          name: "startDate",
          type: "date",
        },
        endDate: {
          value: "",
          endDateLabel: "End Date",
          name: "endDate",
          type: "date",
        },
      },
    ],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleAddButton = (e) => {
    e.preventDefault();
    const educationId = Date.now();

    const newEducation = {
      educationId,
      schoolName: {
        value: "",
        nameLabel: "School Name",
        name: "schoolname",
        type: "text",
      },
      titleOfStudy: {
        value: "",
        titleOfStudyLabel: "Title Of Study",
        name: "titleofstudy",
        type: "text",
      },
      startDate: {
        value: "",
        startDateLabel: "Start Date",
        name: "startDate",
        type: "date",
      },
      endDate: {
        value: "",
        endDateLabel: "End Date",
        name: "endDate",
        type: "date",
      },
    };
    setEducationInformation((prevEducations) => ({
      ...prevEducations,
      educations: [...prevEducations.educations, newEducation],
    }));
  };

  const handleDeleteButton = (educationId, e) => {
    e.preventDefault();
    setEducationInformation((prevEducations) => ({
      ...prevEducations,
      educations: prevEducations.educations.filter(
        (education) => education.educationId !== educationId
      ),
    }));
  };

  const handleOnChange = (educationId, name, e) => {
    e.preventDefault();

    const value = e.target.value;

    setEducationInformation((prev) => ({
      ...prev,
      educations: prev.educations.map((education) =>
        education.educationId === educationId
          ? { ...education, [name]: { ...education[name], value } }
          : education
      ),
    }));
  };

  const editHandler = (e) => {
    setIsSubmitted(false);
  };

  let formInputs = (
    <>
      <h3>Education</h3>
      <form onSubmit={handleOnSubmit}>
        {educationInformation.educations.map((education) => (
          <div key={education.educationId}>
            <label>{education.schoolName.nameLabel}</label>
            <input
              name={education.schoolName.name}
              type={education.schoolName.type}
              value={education.schoolName.value}
              onChange={(e) =>
                handleOnChange(education.educationId, "schoolName", e)
              }
            />
            <label>{education.titleOfStudy.titleOfStudyLabel}</label>
            <input
              name={education.titleOfStudy.name}
              type={education.titleOfStudy.type}
              value={education.titleOfStudy.value}
              onChange={(e) =>
                handleOnChange(education.educationId, "titleOfStudy", e)
              }
            />
            <label>{education.startDate.startDateLabel}</label>
            <input
              name={education.startDate.name}
              type={education.startDate.type}
              value={education.startDate.value}
              onChange={(e) =>
                handleOnChange(education.educationId, "startDate", e)
              }
            />
            <label>{education.endDate.endDateLabel}</label>
            <input
              name={education.endDate.name}
              type={education.endDate.type}
              value={education.endDate.value}
              onChange={(e) =>
                handleOnChange(education.educationId, "endDate", e)
              }
            />
            <button onClick={(e) => handleDeleteButton(education.educationId, e)}>
              Delete
            </button>
          </div>
        ))}
        <button onClick={handleAddButton}>Add</button>
        <button type="submit">Submit</button>
      </form>
    </>
  );

  if (isSubmitted) {
    formInputs = (
      <EducationTable educationData={educationInformation} edit={editHandler} />
    );
  }
  console.log("educationInformation: ", educationInformation);
  return <>{formInputs}</>;
};
export default EducationForm;
