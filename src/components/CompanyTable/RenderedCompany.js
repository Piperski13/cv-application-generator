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
        </>
      ))}
    </>
  );
};

export default RenderedCompany;
