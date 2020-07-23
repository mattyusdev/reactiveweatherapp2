import * as Yup from "yup";

const onlyEnglishRegex = /^[a-zA-Z ]+$/;

export const validationSchema = Yup.object({
  text: Yup.string()
    .required("Search is required.")
    .matches(onlyEnglishRegex, "Only English letters are allowed.")
    .min(3, "Search must be atleast 3 characters."),
});
