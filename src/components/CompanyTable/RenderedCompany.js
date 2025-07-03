const RenderedCompany = (props) => {
  console.log(props.companyData);
  return (
    <>
      {props.companyData.map((company, index) => (
        <>
          <tr key={`companyName-${index}`}>
            <td>
              {company.companyName.nameLabel}: {company.companyName.value}
            </td>
          </tr>
          <tr key={`position-${index}`}>
            <td>
              {company.position.positionLabel}: {company.position.value}
            </td>
          </tr>
          <tr key={`responsibilities-${index}`}>
            <td>
              {company.responsibilities.responsibilitiesLabel}:{" "}
              {company.responsibilities.value}
            </td>
          </tr>
          <tr key={`company-startDate-${index}`}>
            <td>
              {company.startDate.startDateLabel}: {company.startDate.value}
            </td>
          </tr>
          <tr key={`company-endDate-${index}`}>
            <td>
              {company.endDate.endDateLabel}: {company.endDate.value}
            </td>
          </tr>
        </>
      ))}
    </>
  );
};

export default RenderedCompany;
