import RenderedCompany from "./RenderedCompany";
import { EditButton } from "../Buttons/Buttons";
const CompanyTable = (props) => {
  const handleEdit = (e) => {
    e.preventDefault();
    props.edit(e);
  };

  return (
    <div className="flex justify-center flex-wrap mb-6 sm:pl-12 sm:w-[750px] sm:flex-nowrap sm:justify-between">
      <table>
        <thead>
          <tr>
            <th className="pt-7"></th>
          </tr>
          <tr>
            <th className="text-left">Work experience</th>
          </tr>
          <tr>
            <td colSpan="2">
              <div className="h-1 bg-indigo-500 w-[350px] mx-auto my-2 sm:w-[575px]"></div>
            </td>
          </tr>
        </thead>
        <tbody>
          <RenderedCompany companyData={props.companyData.companies} />
        </tbody>
      </table>
      <div className="flex items-center">
        <EditButton onClick={handleEdit} hide={props.hide} />
      </div>
    </div>
  );
};

export default CompanyTable;
