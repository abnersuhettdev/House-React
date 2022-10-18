import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../parts/Header";
import Footer from "../parts/Footer";
import success from "../../images/sucesso.png";
import err from "../../images/erro.png";

import "../../styles/newUser.css";

async function createUser(credentials) {
  return fetch("http://localhost:8080/api/register/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function NewUser() {
  const [email, setEmail] = React.useState("form-control");

  const [name, setName] = React.useState("form-control");

  const [password, setPassword] = React.useState("form-control");

  const [password2, setPassword2] = React.useState("form-control");

  const [inputs, setInputs] = React.useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputs.password === inputs.password2) {
      console.log(inputs.password, inputs.password2);
      const token = await createUser(inputs);
      console.log(token);
      navigate("/");
    } else {
    }

    if (inputs.email === "") {
      setEmail("form-control error");
    } else {
      setEmail("form-control success");
    }

    if (inputs.username === "") {
      setName("form-control error");
    } else {
      setName("form-control success");
    }

    if (inputs.password === "") {
      setPassword("form-control error");
    } else {
      setPassword("form-control success");
    }

    if (inputs.password2 === "") {
      setPassword2("form-control error");
    } else {
      setPassword2("form-control success");
    }
  };

  return (
    <div className="wrapper">
      <Header />
      <div id="form">
        <div className="container-c">
          <div className="title">
            <h2>Criar Conta</h2>
          </div>
          <form onSubmit={handleSubmit} className="form" id="form">
            <div className={name}>
              <label htmlFor="username">Nome:</label>

              <input
                onChange={handleChange}
                type="text"
                name="username"
                id="username"
              />
              <i>
                <img className="img-success" src={success} alt="sucesso" />
              </i>
              <i>
                <img className="img-error" src={err} alt="erro" />
              </i>

              <small>Error message</small>
            </div>

            <div className={email}>
              <label htmlFor="email">Email:</label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
              />
              <i>
                <img className="img-success" src={success} alt="sucesso" />
              </i>
              <i>
                <img className="img-error" src={err} alt="erro" />
              </i>

              <small>Error message</small>
            </div>

            <div className={password}>
              <label htmlFor="password">Senha:</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                id="password"
              />
              <i>
                <img className="img-success" src={success} alt="sucesso" />
              </i>
              <i>
                <img className="img-error" src={err} alt="erro" />
              </i>

              <small>Error message</small>
            </div>

            <div className={password2}>
              <label htmlFor="password2">Confirme sua Senha:</label>
              <input
                onChange={handleChange}
                type="password"
                name="password2"
                id="password2"
              />
              <i>
                <img className="img-success" src={success} alt="sucesso" />
              </i>
              <i>
                <img className="img-error" src={err} alt="erro" />
              </i>

              <small>Error message</small>
            </div>

            <button type="submit">ENVIAR</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
