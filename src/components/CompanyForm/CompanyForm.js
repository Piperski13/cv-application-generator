import { useState } from "react";
import CompanyTable from "../CompanyTable/CompanyTable";

const CompanyForm = (props) => {
  //     companies: [
  //     { companyId: 1011, companyName: "levi", positionTitle: "Software",
  // 	responsibilities: "asdasda", startDate: "may", endDate:"june" },
  //     ...
  //   ]
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

  let formInputs = (
    <>
      <h3>Work experience</h3>
      <form onSubmit={handleOnSubmit}>
        {companyInformation.companies.map((company) => (
          <div key={company.companyId}>
            <label>{company.companyName.nameLabel}</label>
            <input
              name={company.companyName.name}
              type={company.companyName.type}
              value={company.companyName.value}
              onChange={(e) =>
                handleOnChange(company.companyId, "companyName", e)
              }
            />
            <label>{company.position.positionLabel}</label>
            <input
              name={company.position.name}
              type={company.position.type}
              value={company.position.value}
              onChange={(e) => handleOnChange(company.companyId, "position", e)}
            />
            <label>{company.responsibilities.responsibilitiesLabel}</label>
            <textarea
              name={company.responsibilities.name}
              value={company.responsibilities.value}
              onChange={(e) =>
                handleOnChange(company.companyId, "responsibilities", e)
              }
              rows={4}
              cols={40}
            />
            <button onClick={(e) => handleDeleteButton(company.companyId, e)}>
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
      <CompanyTable companyData={companyInformation} edit={editHandler} />
    );
  }
  console.log("companyInformation: ", companyInformation);
  return <>{formInputs}</>;
};
export default CompanyForm;
