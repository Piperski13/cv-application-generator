import { useState } from "react";
import EducationTable from "../EducationTable/EducationTable";
import { SubmitButton, AddButton, DeleteButton } from "../Buttons/Buttons";

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

  let borderHolder = "";
  if (educationInformation.educations.length > 1) {
    borderHolder = <div className="border-b-4 border-gray-500 pb-10"></div>;
  }

  console.log(
    "educationInformation.educations.length: ",
    educationInformation.educations.length
  );

  let formInputs = (
    <div className="flex justify-center">
      <div>
        <div className="div-underline-style">
          <h3 className="inline-block">Education</h3>
          <AddButton onClick={handleAddButton} />
        </div>

        <form onSubmit={handleOnSubmit}>
          {educationInformation.educations.map((education) => (
            <div
              key={education.educationId}
              className="flex justify-center flex-col"
            >
              <div>
                <div className="flex justify-between items-center my-2 ">
                  <label>{education.schoolName.nameLabel}</label>
                  <DeleteButton
                    onClick={(e) =>
                      handleDeleteButton(education.educationId, e)
                    }
                  />
                </div>
                <input
                  required
                  name={education.schoolName.name}
                  type={education.schoolName.type}
                  value={education.schoolName.value}
                  onChange={(e) =>
                    handleOnChange(education.educationId, "schoolName", e)
                  }
                  className="input-style"
                />
              </div>
              <div>
                <label>{education.titleOfStudy.titleOfStudyLabel}</label>
                <input
                  required
                  name={education.titleOfStudy.name}
                  type={education.titleOfStudy.type}
                  value={education.titleOfStudy.value}
                  onChange={(e) =>
                    handleOnChange(education.educationId, "titleOfStudy", e)
                  }
                  className="input-style"
                />
              </div>
              <div>
                <label>{education.startDate.startDateLabel}</label>
                <input
                  required
                  name={education.startDate.name}
                  type={education.startDate.type}
                  value={education.startDate.value}
                  onChange={(e) =>
                    handleOnChange(education.educationId, "startDate", e)
                  }
                  className="input-style"
                />
              </div>
              <div>
                <label>{education.endDate.endDateLabel}</label>
                <input
                  required
                  name={education.endDate.name}
                  type={education.endDate.type}
                  value={education.endDate.value}
                  onChange={(e) =>
                    handleOnChange(education.educationId, "endDate", e)
                  }
                  className="input-style"
                />
              </div>
              {borderHolder}
            </div>
          ))}
          <SubmitButton />
        </form>
      </div>
    </div>
  );

  if (isSubmitted) {
    formInputs = (
      <EducationTable educationData={educationInformation} edit={editHandler} />
    );
  }

  return <>{formInputs}</>;
};
export default EducationForm;
