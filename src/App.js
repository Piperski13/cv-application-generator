import Converter from "./components/Converter/Converter";

function App() {
  return (
    <div className="flex justify-center items-center font-merriweather bg-gray-50 text-gray-700">
      <div className="flex justify-center items-center flex-col w-[395px] sm:w-[750px] bg-gray-100 border border-gray-300 p-4 my-8 rounded-2xl ">
        <Converter />
      </div>
    </div>
  );
}

export default App;
