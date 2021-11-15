import React, { useEffect } from "react";
import Form from "../../components/Form/Form";
import Typography from "@material-ui/core/Typography";
import MainButton from "../../components/UI/MainButton/MainButton";
import * as yup from "yup";
import { useFormik } from "formik";
import CustomInput from "../../components/UI/CustomInput/CustomInput";
import { Container } from "@mui/material";
import { setIsLogged } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserToken } from "../../store";
import { tokenRequest, redirectProfile } from "../../variables";

const schema = yup.object().shape({
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
});

const LogInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
      userName: "",
    },
    onSubmit: () => {
      dispatch(setIsLogged());
      if (userToken.request_token) {
        localStorage.setItem("token", JSON.stringify(userToken));
        return (window.location.href = `https://www.themoviedb.org/authenticate/${userToken.request_token}?redirect_to=${redirectProfile}`);
      }
      navigate("/userpage");
    },
    validationSchema: schema,
  });
  const { userToken } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUserToken(tokenRequest));
  }, [dispatch]);
  return (
    <>
      <Typography component="h2" variant="h2">
        Log in
      </Typography>
      <Container maxWidth="sm" sx={{ pt: "20px" }}>
        <Form onSubmit={formik.handleSubmit}>
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

          <MainButton>Log In</MainButton>
        </Form>
      </Container>
    </>
  );
};

export default LogInPage;
