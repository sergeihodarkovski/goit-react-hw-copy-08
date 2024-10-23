import React from "react";
import s from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={s.hero}>
      <div className={s.heroContent}>
        <div className={s.textCenter}>
          <h1 className={s.titei}>Register now!</h1>
        </div>
        <div className={s.card}>
          <form className={s.cardBody}>
            <div className={s.formControl}>
              <div className={s.label}>
                <span className={s.labelText}>Email</span>
              </div>
              <input
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
              <input
                type="password"
                placeholder="password"
                className={s.input}
                required
              />
            </div>
            <div className={s.formControl}>
              <div className={s.label}>
                <span className={s.labelText}>Confirm Password</span>
              </div>
              <input
                type="password"
                placeholder="confirm password"
                className={s.input}
                required
              />
            </div>
            <div className={s.formControl}>
              <button className={s.btnPrimary}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
