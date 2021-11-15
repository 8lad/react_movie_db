import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router-dom";
import MainButton from "../../components/UI/MainButton/MainButton";
import * as yup from "yup";
import { useFormik } from "formik";
import CustomInput from "../../components/UI/CustomInput/CustomInput";
import CustomSelect from "../../components/UI/CustomSelect/CustomSelect";
import { Container } from "@mui/material";
import Confetti from "react-confetti";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Name can't contain numbers")
    .required("This field must be filled"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Name can't contain numbers")
    .required("This field must be filled"),
  email: yup
    .string()
    .email("Please fill this field in a correct way")
    .required("This field must be filled"),
  password: yup
    .string()
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "This field should containe from 6 to 16 symbols, includes numbers, letters and special symbols (!@#$%^&*)"
    )
    .required("This field must be filled"),
  userName: yup
    .string()
    .matches(
      /^[a-z]{1}[a-zA-Z_.]{3,16}$/gm,
      "User name must begin from small letter, contains from 3 to 16 symbols, and can't contain numbers or other specials symbols, except . or _ "
    )
    .required("This field must be filled"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must be matched")
    .required("This field must be filled"),
  date: yup.string().required("This field must be filled"),
  gender: yup.string().required("This field must be filled"),
});

const SignInPage = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      userName: "",
      date: "2000-01-01",
      gender: "",
    },
    onSubmit: (values) => {
      setIsSubmit(true);
    },
    validationSchema: schema,
  });

  return (
    <>
      <Typography component="h2" variant="h2">
        Sign in
      </Typography>
      {isSubmit ? (
        <>
          <Confetti />
          <Typography component="h4" variant="h4" sx={{ marginTop: "30px" }}>
            Congratulations, you've passed the test with form validation
          </Typography>
        </>
      ) : null}
      <Container maxWidth="sm" sx={{ pt: "20px" }}>
        <Form onSubmit={formik.handleSubmit}>
          <CustomInput
            id="firstName"
            name="firstName"
            label="First name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            onBlur={formik.handleBlur}
          />
          <CustomInput
            id="lastName"
            name="lastName"
            label="Last name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            onBlur={formik.handleBlur}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <CustomSelect
            label="Gender"
            options={[
              { value: "male", name: "Male" },
              { value: "female", name: "Female" },
            ]}
            id="gender"
            name="gender"
            error={formik.touched.gender && Boolean(formik.errors.gender)}
            helperText={formik.touched.gender && formik.errors.gender}
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <CustomInput
            id="userName"
            name="userName"
            label="User name"
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            onBlur={formik.handleBlur}
            helperText={formik.touched.userName && formik.errors.userName}
          />
          <CustomInput
            id="date"
            name="date"
            label="Date of birth"
            type="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <CustomInput
            id="email"
            name="email"
            label="Email addres"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            onBlur={formik.handleBlur}
            helperText={formik.touched.email && formik.errors.email}
          />
          <CustomInput
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            onBlur={formik.handleBlur}
            helperText={formik.touched.password && formik.errors.password}
            fullWidth
          />
          <CustomInput
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm password"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            onBlur={formik.handleBlur}
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <MainButton>Sign In</MainButton>
        </Form>
        <MainButton
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Go back
        </MainButton>
      </Container>
    </>
  );
};

export default SignInPage;
