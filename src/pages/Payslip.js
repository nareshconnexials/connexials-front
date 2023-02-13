import React from "react";
import PageTitle from "../components/Typography/PageTitle";
import { jsPDF } from "jspdf";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
} from "@windmill/react-ui";
import { FaFileDownload } from "react-icons/fa";
import ReactDOMServer from "react-dom/server";

import { getRole } from "../helpers/Utils";

import PdfDocument from "../containers/PdfDocument/index";

const Payslip = () => {
  const isRole = getRole();
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a3",
  });
  
  const htmlUi = ReactDOMServer.renderToStaticMarkup(<PdfDocument />);

  const handleGetPDF = async () => {
    await doc.html(htmlUi, {
      x: 130,
      y: 70,
      callback: (file) => {
        file.save("docs.pdf");
      },
    });
  };

  return (
    <>
      {isRole === "employee" ? (
        <div>
          <PageTitle>Payslip</PageTitle>
          <div className="w-full flex justify-center">
            <TableContainer className="mb-8">
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell className="w-full">Month</TableCell>
                    <TableCell>Download</TableCell>
                  </tr>
                </TableHeader>
                <TableBody>
                  {/* {leaveData.map((user, i) => ( */}
                  <TableRow>
                    <TableCell>
                      <span className="text-sm">{"January"}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        <FaFileDownload
                          onClick={handleGetPDF}
                          className="text-xl text-green-600 cursor-pointer"
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      ) : (
        <>
          <PageTitle>Payslip</PageTitle>
        </>
      )}
    </>
  );
};

export default Payslip;
