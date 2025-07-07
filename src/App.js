import InfoForm from "./components/InfoForm/InfoForm";
import CompanyForm from "./components/CompanyForm/CompanyForm";
import EducationForm from "./components/EducationForm/EducationForm";

function App() {
  return (
    <div className="flex justify-center items-center font-merriweather bg-gray-50 text-gray-700">
      <div className="flex  justify-center items-center flex-col w-[750px] bg-gray-100 border border-gray-300 p-4 my-8 rounded-2xl">
        <InfoForm />
        <EducationForm />
        <CompanyForm />
      </div>
    </div>
  );
}

export default App;
