import { jsPDF } from "jspdf";
import { useState } from "react";
import html2canvas from "html2canvas";
import InfoForm from "../InfoForm/InfoForm";
import CompanyForm from "../CompanyForm/CompanyForm";
import EducationForm from "../EducationForm/EducationForm";

const PDFGenerator = () => {
  const [pdfName, setPdfName] = useState("");

  const [hideButtons, setHideButtons] = useState(false);

  const handleUserData = (userData) => {
    const nameString = userData.replace(/\s+/g, "_") + "_cv.pdf";
    setPdfName(nameString);
  };
  const generatePDF = () => {
    const input = document.getElementById("cv-content");
    setHideButtons(true);

    setTimeout(() => {
      html2canvas(input, {
        scale: 2,
        scrollY: -window.scrollY,
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        const pdfWidth = 595;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "pt",
          format: [pdfWidth, pdfHeight],
        });

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(pdfName || "cv.pdf");

        setHideButtons(false);
      });
    }, 500);
  };

  //     setHideButtons(true);

  //     setTimeout(() => {
  //       const input = document.getElementById("cv-content");
  //       html2canvas(input)
  //         .then((canvas) => {
  //           const imgData = canvas.toDataURL("image/png");
  //           const pdf = new jsPDF({
  //             orientation: "portrait",
  //             unit: "pt",
  //             format: "a4",
  //           });

  //           const imgProps = pdf.getImageProperties(imgData);
  //           const pdfWidth = pdf.internal.pageSize.getWidth();
  //           const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  //           pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  //           pdf.save(pdfName || "cv.pdf");
  //         })
  //         .finally(() => {
  //           setTimeout(() => {
  //             setHideButtons(false);
  //           }, 300);
  //         });
  //     }, 100);
  //   };
  return (
    <>
      <div
        id="cv-content"
        className="flex justify-center items-center flex-col w-[395px] sm:w-[750px]  p-4 my-8 rounded-2xl"
      >
        <InfoForm userData={handleUserData} hideButtons={hideButtons} />
        <CompanyForm hideButtons={hideButtons} />
        <EducationForm hideButtons={hideButtons} />
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
