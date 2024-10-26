import React, { useEffect } from "react";
import s from "./RegisterPage.module.css";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const hendleSubmit = (values, options) => {
    console.log(values);
    dispatch(register(values));
    options.resetForm();
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className={s.hero}>
      <div className={s.heroContent}>
        <div className={s.textCenter}>
          <h1 className={s.titei}>Register now!</h1>
        </div>
        <div className={s.card}>
          <Formik onSubmit={hendleSubmit} initialValues={initialValues}>
            <Form className={s.cardBody}>
              <div className={s.formControl}>
                <div className={s.label}>
                  <span className={s.labelText}>Name</span>
                </div>

                <Field
                  name="name"
                  type="text"
                  placeholder="name"
                  className={s.input}
                  required
                />
              </div>
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
              </div>
              <div className={s.formControl}>
                <button type="submit" className={s.btnPrimary}>
                  Register
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
