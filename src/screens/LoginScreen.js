import React, { Component } from "react";

class LoginScreen extends Component {
  render() {
    return (
      <>
        <section className="shop login section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-12">
                <div className="login-form">
                  <h2>Login</h2>
                  <p>Please register in order to checkout more quickly</p>
                  {/* Form */}
                  <form className="form" method="post" action="#">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            Your Email<span>*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            Your Password<span>*</span>
                          </label>
                          <input
                            type="password"
                            name="password"
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group login-btn">
                          <button className="btn" type="submit">
                            Login
                          </button>
                          <a href="register.html" className="btn">
                            Register
                          </a>
                        </div>
                        <div className="checkbox">
                          <label className="checkbox-inline" htmlFor={2}>
                            <input name="news" id={2} type="checkbox" />
                            Remember me
                          </label>
                        </div>
                        <a href="#" className="lost-pass">
                          Lost your password?
                        </a>
                      </div>
                    </div>
                  </form>
                  {/*/ End Form */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default LoginScreen;
