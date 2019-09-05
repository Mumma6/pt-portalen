import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { getCurrentProfile } from "../../actions/profile";

interface ILogin {
  email: string;
  password: string;
}

const Login: React.FC = (props: any) => {
  const initialState = {
    email: "",
    password: ""
  };

  useEffect(() => {
    // get current profile is a Props
    console.log("use effffect");
    props.getCurrentProfile();
  }, []);

  const [loginData, setLoginData] = useState<ILogin>(initialState);

  const { email, password } = loginData;

  const onChange = (e: any) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submittedddd, inloggad what everrr");
    props.login({ email, password });
  };

  // redirect if loged in
  if(props.isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <React.Fragment>
      <h1 className="large text-primary">Logga in</h1>
      <p className="lead">
        <i className="fas fa-user" /> Logga in på ditt konto
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="E-postadress"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Lösenord"
            name="password"
            minLength={6}
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Logga in" />
      </form>
      <p className="my-1">
        Har du redan inget konto? <Link to="/register">Registrera dig</Link>
      </p>
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login, getCurrentProfile  }
)(Login);
