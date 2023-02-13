import * as Yup from "yup";

export const createLeaveModalSchema = Yup.object().shape({
  fromDate: Yup.date().required("From date is required"),
  toDate: Yup.date()
    .required("To date is required")
    .when("fromDate", (fromDate) => {
      if (fromDate) {
        return Yup.date()
          .min(fromDate, "ToDate must greater than FromDate")
          .typeError("To Date is required");
      }
    }),
  fromSession: Yup.string().required("Session1 is required"),
  toSession: Yup.string().required("Session2 is required"),
  days: Yup.number().positive(),
  mailTo: Yup.string().email().required("Mail To is required"),
  reason: Yup.string().required("Reason is required"),
});
