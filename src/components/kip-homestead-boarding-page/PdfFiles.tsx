import React from "react";
import PDFViewer from "./PDF-Viewer/PDFViewer";
import FactSheets from "./Fact-sheets/FactSheets";
import { Section } from "../shared/section";
import { Container } from "../shared/container";
import { Heading } from "../shared/ui/heading";
import SectionSeparator from "../common/section-separator";

const PdfFiles = () => {
  return (
    <>
      <Section>
        <Container>
          <Heading
            size="h2"
            as="h3"
            className="text-[#122B2B] font-bold tracking-[0.8px] text-center"
          >
            Boarding Forms
          </Heading>
        </Container>
      </Section>
      <SectionSeparator />
      <div className="flex flex-col  gap-[50px] lg:flex-row">
        <PDFViewer fileSrc="/files/MedicationAuthorityForm-KHS2023.pdf" />
        <PDFViewer fileSrc="/files/DietaryAuthorityForm-KHS2023.pdf" />
      </div>
      <FactSheets />
    </>
  );
};

export default PdfFiles;
