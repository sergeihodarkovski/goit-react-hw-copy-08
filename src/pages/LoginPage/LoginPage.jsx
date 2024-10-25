import React, { useEffect } from "react";
import s from "./LoginPage.module.css";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };
  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn);
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className={s.hero}>
      <div className={s.heroContent}>
        <div className={s.textCenter}>
          <h1 className={s.titei}>Login now!</h1>
        </div>
        <div className={s.card}>
          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form className={s.cardBody}>
              <div className={s.formControl}>
                <div className={s.label}>
                  <span className={s.labelText}>Email</span>
                </div>
                <Field
                  name="email"
                  type="email"
                  placeholder="email"
                  className={s.input}
                  required
                />
              </div>
              <div className={s.formControl}>
                <div className={s.label}>
                  <span className={s.labelText}>Password</span>
                </div>
                <Field
                  name="password"
                  type="password"
                  placeholder="password"
                  className={s.input}
                  required
                />
                <div className={s.label}>
                  <a href="#" className={s.labelTextAlt}>
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className={s.formControl}>
                <button type="submit" className={s.btn}>
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
