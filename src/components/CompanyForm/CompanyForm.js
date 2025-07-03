import { useState } from "react";
// import InfoTable from "../InfoTable/InfoTable";

const CompanyForm = (props) => {
  //     companies: [
  //     { companyId: 1011, companyName: "levi", positionTitle: "Software",
  // 	responsibilities: "asdasda", startDate: "may", endDate:"june" },
  //     ...
  //   ]
  const [companyInformation, setCompanyInformation] = useState({
    companies: [
      {
        companyId: 1,
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
      },
    ],
  });

  //   const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // setIsSubmitted(true);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
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

  //   const editHandler = (e) => {
  //     setIsSubmitted(false);
  //   };

  let formInputs = (
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
        </div>
      ))}
      <button onClick={handleAddClick}>Add</button>
      <button type="submit">Submit</button>
    </form>
  );

  //   if (isSubmitted) {
  //     formInputs = <InfoTable infoData={companyInformation} edit={editHandler} />;
  //   }
  console.log("companyInformation: ", companyInformation);
  return <>{formInputs}</>;
};
export default CompanyForm;
