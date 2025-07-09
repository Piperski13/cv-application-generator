import { jsPDF } from "jspdf";
import { useState } from "react";
import html2canvas from "html2canvas";
import InfoForm from "../InfoForm/InfoForm";
import CompanyForm from "../CompanyForm/CompanyForm";
import EducationForm from "../EducationForm/EducationForm";

const PDFGenerator = () => {
  const [pdfName, setPdfName] = useState("");

  const handleUserData = (userData) => {
    const nameString = userData.replace(/\s+/g, "_") + "_cv.pdf";
    setPdfName(nameString);
  };
  const generatePDF = () => {
    const input = document.getElementById("cv-content");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(pdfName || "cv.pdf");
    });
  };

  return (
    <>
      <div
        id="cv-content"
        className="flex justify-center items-center flex-col w-[395px] sm:w-[750px]  p-4 my-8 rounded-2xl"
      >
        <InfoForm userData={handleUserData} />
        <CompanyForm />
        <EducationForm />
      </div>
      <button
        onClick={generatePDF}
        className="bg-indigo-500 text-white p-2 rounded"
      >
        Download PDF
      </button>
    </>
  );
};

export default PDFGenerator;
