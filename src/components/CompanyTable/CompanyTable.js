import RenderedCompany from "./RenderedCompany";
import { EditButton } from "../Buttons/Buttons";
const CompanyTable = (props) => {
  const handleEdit = (e) => {
    e.preventDefault();
    props.edit(e);
  };

  return (
    <div className="w-[750px] flex justify-between mb-6 pl-12">
      <table>
        <thead>
          <tr>
            <th className="pt-7"></th>
          </tr>
          <tr className="border-b-4 border-indigo-500">
            <th className="text-left">Work experience</th>
          </tr>
        </thead>
        <tbody>
          <RenderedCompany companyData={props.companyData.companies} />
        </tbody>
      </table>
      <div className="flex items-center">
        <EditButton onClick={handleEdit} />
      </div>
    </div>
  );
};

export default CompanyTable;
