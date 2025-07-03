const RenderedCompany = (props) => {
  console.log(props.companyData);
  return (
    <>
      {props.companyData.map((company, index) => (
        <>
          <tr key={index}>
            <td>
              {company.companyName.nameLabel}: {company.companyName.value}
            </td>
          </tr>
          <tr key={index}>
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
