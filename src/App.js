import InfoForm from "./components/InfoForm/InfoForm";
import CompanyForm from "./components/CompanyForm/CompanyForm";
import EducationForm from "./components/EducationForm/EducationForm";

function App() {
  return (
    <div className="font-merriweather flex justify-center flex-col">
      <InfoForm />
      <EducationForm />
      <CompanyForm />
    </div>
  );
}

export default App;
