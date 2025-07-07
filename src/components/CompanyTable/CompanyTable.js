import RenderedCompany from "./RenderedCompany";
import { EditButton } from "../Buttons/Buttons";
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
      <EditButton onClick={handleEdit} />
    </>
  );
};

export default CompanyTable;
