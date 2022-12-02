import * as Yup from "yup";

export const createStatusModalSchema = Yup.object().shape({
  toEmail: Yup.string().email().nullable(true).required("ToMail is required"),
  statusDate: Yup.date().required("StatusDate is required"),
  billingHours: Yup.number()
    .positive()
    .required("BillingHours is required")
    .typeError("BillingHours should be number"),
  projectType: Yup.string().required("Project is required"),
  workingHours: Yup.number()
    .positive()
    .required("WorkingHours is required")
    .typeError("WorkingHours should be number"),
  statusType: Yup.string().required("Status is required").nullable(true),
  task: Yup.string().nullable(true).required("Task is required"),
});
