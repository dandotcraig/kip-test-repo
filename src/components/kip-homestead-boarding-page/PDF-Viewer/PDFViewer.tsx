import React from "react";

interface PDFViewerProps {
  fileSrc: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileSrc }) => {
  return (
    <>
      <div className="w-[100%] lg:w-[50%] h-[70vh]">
        <iframe
          src={fileSrc}
          title="PDF Viewer"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
        <div className="flex flex-col text-center lg:flex-row justify-evenly mt-[20px] text-base">
          <a
            href={fileSrc}
            className="no-underline hover:underline text-[#007bff] hover:text-[#333971]"
            download
          >
            MedicationAuthorityForm-KHS2023
          </a>
          <a
            href={fileSrc}
            className="bg-[#5f062f] py-[8px] px-[16px] text-white rounded-[32px] mx-4 lg:mx-0 mt-[0px] lg:mb-0"
            download
          >
            Download
          </a>
        </div>
      </div>
    </>
  );
};

export default PDFViewer;
