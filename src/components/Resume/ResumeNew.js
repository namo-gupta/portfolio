// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// import pdf from "../../Assets/../Assets/Namo-Gupta.pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// function ResumeNew() {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);
//   const downloadPdf = () => {
//     const link = document.createElement('a');
//     link.href = pdfFile;
//     link.download = '../../Assets/../Assets/Namo-Gupta.pdf';
//     link.click();
//   };

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>
//         <div>
//       <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
//         <Viewer fileUrl={pdfFile} />
//       </Worker>
//       <button onClick={downloadPdf}>Download PDF</button>
//     </div>

//         {/* <Row className="resume">
//           <Document file={pdf} className="d-flex justify-content-center">
//             <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
//           </Document>
//         </Row> */}

//         {/* <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row> */}
//       </Container>
//     </div>
//   );
// }

// export default ResumeNew;
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Namo-Gupta.pdf"; // Ensure the correct path to your PDF file
import { AiOutlineDownload } from "react-icons/ai";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'Namo-Gupta.pdf';
    link.click();
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={downloadPdf}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <div style={{ width: '100%', height: '100vh' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
              <Viewer fileUrl={pdf} />
            </Worker>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
