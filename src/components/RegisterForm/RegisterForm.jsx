import s from "./RegisterForm.module.css";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <div className={s.hero}>
      <div className={s.heroContent}>
        <div className={s.textCenter}>
          <h1 className={s.title}>Register now!</h1>
        </div>
        <div className={s.card}>
          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
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

export default RegisterForm;
