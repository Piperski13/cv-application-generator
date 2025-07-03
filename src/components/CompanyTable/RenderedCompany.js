const RenderedCompany = (props) => {
  console.log(props.companyData);
  //   responsibilities: {
  //           value: "",
  //           responsibilitiesLabel: "Job Responsibilities",
  //           name: "responsibilities",
  //         }
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
        </>
      ))}
    </>
  );
};

export default RenderedCompany;
