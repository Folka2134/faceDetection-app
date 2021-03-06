import React from "react";

class Register extends React.Component {
  onRegister = () => {
    this.props.onRouteChange("home");
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <div>
        <article className="br3 ba white mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 white">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0 center">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white"
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.onRegisterName}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onRegisterEmail}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onRegisterPassword}
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba white bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Register"
                  onClick={this.onRegister}
                />
              </div>
              <div className="lh-copy mt3">
                <a
                  href="#0"
                  className="f6 link dim white db"
                  onClick={() => onRouteChange("signin")}
                >
                  Signin
                </a>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default Register;
