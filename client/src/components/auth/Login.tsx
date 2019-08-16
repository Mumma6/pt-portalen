import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ILogin {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const initialState = {
    email: "",
    password: ""
  };

  const [loginData, setLoginData] = useState<ILogin>(initialState);

  const { email, password } = loginData;

  const onChange = (e: any) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submittedddd, inloggad what everrr");
  };

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

export default Login;
