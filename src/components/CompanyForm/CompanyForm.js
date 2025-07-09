import { useState } from "react";
import CompanyTable from "../CompanyTable/CompanyTable";
import { SubmitButton, AddButton, DeleteButton } from "../Buttons/Buttons";

const CompanyForm = (props) => {
  const [companyInformation, setCompanyInformation] = useState({
    companies: [
      {
        companyId: Date.now(),
        companyName: {
          value: "",
          nameLabel: "Company Name",
          name: "companyname",
          type: "text",
        },
        position: {
          value: "",
          positionLabel: "Position Title",
          name: "positiontitle",
          type: "text",
        },
        responsibilities: {
          value: "",
          responsibilitiesLabel: "Job Responsibilities",
          name: "responsibilities",
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
    const companyId = Date.now();

    const newCompany = {
      companyId,
      companyName: {
        value: "",
        nameLabel: "Company Name",
        name: "companyname",
        type: "text",
      },
      position: {
        value: "",
        positionLabel: "Position Title",
        name: "positiontitle",
        type: "text",
      },
      responsibilities: {
        value: "",
        responsibilitiesLabel: "Job Responsibilities",
        name: "responsibilities",
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
    setCompanyInformation((prevCompanies) => ({
      ...prevCompanies,
      companies: [...prevCompanies.companies, newCompany],
    }));
  };

  const handleDeleteButton = (companyId, e) => {
    e.preventDefault();
    setCompanyInformation((prevCompanies) => ({
      ...prevCompanies,
      companies: prevCompanies.companies.filter(
        (company) => company.companyId !== companyId
      ),
    }));
  };

  const handleOnChange = (companyId, name, e) => {
    e.preventDefault();

    const value = e.target.value;

    setCompanyInformation((prev) => ({
      ...prev,
      companies: prev.companies.map((company) =>
        company.companyId === companyId
          ? { ...company, [name]: { ...company[name], value } }
          : company
      ),
    }));
  };

  const editHandler = (e) => {
    setIsSubmitted(false);
  };

  let borderHolder = "";
  if (companyInformation.companies.length > 1) {
    borderHolder = <div className="border-b-4 border-gray-500 pb-10"></div>;
  }

  let formInputs = (
    <div className="">
      <div>
        <div className="div-underline-style">
          <h3>Work experience</h3>
          <AddButton onClick={handleAddButton} />
        </div>
        <form onSubmit={handleOnSubmit}>
          {companyInformation.companies.map((company) => (
            <div
              key={company.companyId}
              className="flex justify-center flex-col"
            >
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label>{company.companyName.nameLabel}</label>
                  <DeleteButton
                    onClick={(e) => handleDeleteButton(company.companyId, e)}
                  />
                </div>
                <input
                  required
                  name={company.companyName.name}
                  type={company.companyName.type}
                  value={company.companyName.value}
                  onChange={(e) =>
                    handleOnChange(company.companyId, "companyName", e)
                  }
                  className="input-style"
                />
              </div>
              <div>
                <label>{company.position.positionLabel}</label>
                <input
                  required
                  name={company.position.name}
                  type={company.position.type}
                  value={company.position.value}
                  onChange={(e) =>
                    handleOnChange(company.companyId, "position", e)
                  }
                  className="input-style"
                />
              </div>
              <label>{company.responsibilities.responsibilitiesLabel}</label>
              <textarea
                required
                name={company.responsibilities.name}
                value={company.responsibilities.value}
                onChange={(e) =>
                  handleOnChange(company.companyId, "responsibilities", e)
                }
                rows={4}
                cols={40}
                className="input-style"
              />
              <div>
                <label>{company.startDate.startDateLabel}</label>
                <input
                  required
                  name={company.startDate.name}
                  type={company.startDate.type}
                  value={company.startDate.value}
                  onChange={(e) =>
                    handleOnChange(company.companyId, "startDate", e)
                  }
                  className="input-style"
                />
              </div>
              <div>
                <label>{company.endDate.endDateLabel}</label>
                <input
                  required
                  name={company.endDate.name}
                  type={company.endDate.type}
                  value={company.endDate.value}
                  onChange={(e) =>
                    handleOnChange(company.companyId, "endDate", e)
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
      <CompanyTable
        companyData={companyInformation}
        edit={editHandler}
        hide={props.hideButtons}
      />
    );
  }

  return <>{formInputs}</>;
};
export default CompanyForm;
