import React from "react";
const RenderedCompany = (props) => {
  return (
    <>
      {props.companyData.map((company, index) => (
        <React.Fragment key={company.companyId || index}>
          <tr key={`companyName-${index}`} className="text-base/8">
            <td className="w-[500px] pt-4">
              {company.companyName.nameLabel} : <nav className="pl-10 inline" />{" "}
              {company.companyName.value}
            </td>
          </tr>
          <tr key={`position-${index}`} className="text-base/8">
            <td>
              {company.position.positionLabel} :{" "}
              <nav className="pl-14 inline" /> {company.position.value}
            </td>
          </tr>
          <tr key={`responsibilities-${index}`}>
            <td className="pt-5 pb-5">
              <span>{company.responsibilities.responsibilitiesLabel}:</span>
              <span className="block mt-3" />
              <span className="text-sm/6">
                {company.responsibilities.value}
              </span>
            </td>
          </tr>
          <tr key={`company-startDate-${index}`} className="text-base/8">
            <td>
              {company.startDate.startDateLabel} :{" "}
              <nav className="pl-10 inline" /> {company.startDate.value}
            </td>
          </tr>
          <tr key={`company-endDate-${index}`} className="text-base/8">
            <td className="pb-10 border-b-4 border-indigo-500">
              {company.endDate.endDateLabel} : <nav className="pl-10 inline" />
              {company.endDate.value}
            </td>
          </tr>
        </React.Fragment>
      ))}
    </>
  );
};

export default RenderedCompany;
