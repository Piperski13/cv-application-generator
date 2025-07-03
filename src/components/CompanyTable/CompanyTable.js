import RenderedCompany from "./RenderedCompany";
const CompanyTable = (props) => {
  const handleEdit = (e) => {
    e.preventDefault();
    props.edit(e);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Work experience</th>
          </tr>
        </thead>
        <tbody>
          <RenderedCompany companyData={props.companyData.companies} />
        </tbody>
      </table>
      <button onClick={handleEdit}>Edit</button>
    </>
  );
};

export default CompanyTable;
