import * as Yup from "yup";

export const validationSchema = Yup.object({
  text: Yup.string()
    .required("Search is required.")
    .min(3, "Search must be atleast 3 characters."),
});
