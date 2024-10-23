import React from "react";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={s.hero}>
      <div className={s.heroContent}>
        <div className={s.textCenter}>
          <h1 className={s.titei}>Login now!</h1>
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
              <div className={s.label}>
                <a href="#" className={s.labelTextAlt}>
                  Forgot password?
                </a>
              </div>
            </div>
            <div className={s.formControl}>
              <button className={s.btnPrimary}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
