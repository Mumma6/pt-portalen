import React, { useState } from "react";
import { Link } from "react-router-dom";

interface IFormData {
  name: string;
  email: string;
  password: string;
  password2: string;
}

const Register: React.FC = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    password2: ""
  };

  const [formData, setFormData] = useState<IFormData>(initialState);

  const { name, email, password, password2 } = formData;

  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (password !== password2) {
      alert("fel pw");
    } else {
      console.log(formData);
    }
  };

  return (
    <React.Fragment>
      <h1 className="large text-primary">Bli medlem</h1>
      <p className="lead">
        <i className="fas fa-user" /> Skapa ditt konto
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Namn"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
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
        <div className="form-group">
          <input
            type="password"
            placeholder="Bekräfta Lösenord"
            name="password2"
            minLength={6}
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Registrera" />
      </form>
      <p className="my-1">
        Har du redan ett konto? <Link to="/login">Logga in</Link>
      </p>
    </React.Fragment>
  );
};

export default Register;
