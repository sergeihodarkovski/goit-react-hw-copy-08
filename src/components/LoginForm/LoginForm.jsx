import s from "./LoginForm.module.css";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };

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

export default LoginForm;
