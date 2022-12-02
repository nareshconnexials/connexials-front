import React from "react";
import "../../assets/css/pdfUi.css";
import LogoPdf from "../../assets/img/Connexials-Logo.png";

const PdfDocument = () => {
  return (
    <>
      <div>
        <table className="pdf-table">
          <thead className="pdf-th pdf-th-bold">
            <tr>
              <th
                className="pdf-th pdf-th-bold"
                colSpan={4}
                style={{ paddingTop: "3rem" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      marginTop: "-3rem",
                      marginLeft: "-1.3rem",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3
                      style={{
                        width: "260px",
                        marginBottom: "-1%",
                        fontSize: "larger",
                        fontWeight: "bold",
                      }}
                    >
                      Connexials Technology LLP
                    </h3>
                    <p
                      style={{
                        lineHeight: "-20px",
                        width: "225px",
                        wordSpacing: "2px",
                      }}
                    >
                      Reg. Off A14 Ground Floor, Shashi Garden Mayur Vihar
                      Phase-II- New Delhi-110091
                    </p>
                  </div>
                  <img src={LogoPdf} alt="" />
                </div>
              </th>
            </tr>
            <tr>
              <th
                className="pdf-th pdf-th-bold"
                colSpan={4}
                style={{
                  padding: "1rem",
                  backgroundColor: "rgb(249, 149, 55)",
                  fontSize: "larger",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Salary slip for the month of JULY 2022
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="pdf-th pdf-th-bold">Employee Name</th>
              <td className="pdf-td pdf-td-font-text">John Doe</td>
              <th className="pdf-th pdf-th-bold">PAN No.</th>
              <td className="pdf-td pdf-td-font-text">GFQPS3345M</td>
            </tr>
            <tr>
              <th className="pdf-th pdf-th-bold">Designation</th>
              <td className="pdf-td pdf-td-font-text">Sr. Software Engineer</td>
              <th className="pdf-th pdf-th-bold">UAN No.</th>
              <td className="pdf-td pdf-td-font-text">Awaited</td>
            </tr>
            <tr>
              <th className="pdf-th pdf-th-bold">Department/Project</th>
              <td className="pdf-td pdf-td-font-text">Frontend Development</td>
              <th className="pdf-th pdf-th-bold">Project Location</th>
              <td className="pdf-td pdf-td-font-text">Remote</td>
            </tr>
            <tr>
              <th className="pdf-th pdf-th-bold">Bank A/C No.</th>
              <td className="pdf-td pdf-td-font-text">190313</td>
              <th className="pdf-th pdf-th-bold">Total Working Days</th>
              <td className="pdf-td pdf-td-font-text">31</td>
            </tr>

            <tr>
              <th className="pdf-th pdf-th-bold">Bank Name</th>
              <td className="pdf-td pdf-td-font-text">PNB</td>
              <th className="pdf-th pdf-th-bold">Days Attended</th>
              <td className="pdf-td pdf-td-font-text">31</td>
            </tr>
            <tr>
              <th className="pdf-th pdf-th-bold">IFSC Code</th>
              <td className="pdf-td pdf-td-font-text">IFTH42127</td>
              <th className="pdf-th pdf-th-bold">Leaves Taken</th>
              <td className="pdf-td pdf-td-font-text">0</td>
            </tr>
            <tr>
              <th className="pdf-th pdf-th-bold">Date Of Joining</th>
              <td className="pdf-td pdf-td-font-text">06/06/2022</td>
              <td className="pdf-td pdf-td-font-text"></td>
              <td className="pdf-td pdf-td-font-text"></td>
            </tr>
            <tr>
              <td className="pdf-td pdf-td-font-text">&nbsp;</td>
              <td className="pdf-td pdf-td-font-text">&nbsp;</td>
              <td className="pdf-td pdf-td-font-text">&nbsp;</td>
              <td className="pdf-td pdf-td-font-text">&nbsp;</td>
            </tr>

            <tr>
              <th colSpan={2} className="th-bold pdf-th">
                Earnings (A)
              </th>
              <th colSpan={2} className="th-bold pdf-th">
                Deduction (B)
              </th>
            </tr>

            <tr>
              <th className="pdf-th pdf-th-bold">Basic Salary</th>
              <td className="pdf-td pdf-td-font-text">INR 65,000.00</td>
              <th className="pdf-th pdf-th-bold">PF</th>
              <td className="pdf-td pdf-td-font-text">INR 2400</td>
            </tr>
            <tr>
              <th className="pdf-th pdf-th-bold">HRA</th>
              <td className="pdf-td pdf-td-font-text">INR 32,500.00</td>
              <th className="pdf-th pdf-th-bold">EPF</th>
              <td className="pdf-td pdf-td-font-text">INR 2400</td>
            </tr>
            <tr>
              <th className="pdf-th pdf-th-bold">Special Allowance</th>
              <td className="pdf-td pdf-td-font-text">INR 27,700.00</td>
              <th className="pdf-th pdf-th-bold">TDS</th>
              <td className="pdf-td pdf-td-font-text">INR 0.00</td>
            </tr>
            <tr>
              <th className="th-bold pdf-th-bold pdf-th">Gross Pay</th>
              <td className="th-bold pdf-td">INR 1,25,200.00</td>
              <th className="th-bold pdf-th-bold pdf-th">Gross Deduction</th>
              <td className="th-bold pdf-td">INR 4,800</td>
            </tr>
            <tr>
              <th className="th-bold pdf-th-bold pdf-th">Gross CTC (A+B)</th>
              <td className="th-bold pdf-td">INR 1,30,000.00</td>
              <th className="th-bold pdf-th-bold pdf-th">NET PAY</th>
              <td className="th-bold pdf-td">INR 1,25,200.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th className="pdf-th pdf-th-bold th-bold" colSpan={4}>
                General Note : This is computer generated document and does not
                required signature.
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};
export default PdfDocument
