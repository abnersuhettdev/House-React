import React, { useMemo } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import imageHouse from "../../images/house.jpg";

export default function Home() {
  const [users, setUsers] = React.useState([]);
  const userForm = useMemo(() => {
    return {};
  }, []);

  React.useEffect(() => {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const login = () => {
    console.log({ userForm });
    fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify(userForm),
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.json())
      .then((data) => {
        console.log(data)
      });
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="container-fluid col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-1 py-4">
          <div id="img" className="col-10 col-sm-8 col-lg-6 mb-3 float-end">
            <img
              src={imageHouse}
              className="shadow-lg d-block mx-lg-auto img-fluid border rounded-3"
              alt="The House"
              width="700"
              height="400"
              loading="lazy"
            />
          </div>
          <div id="form" className="col-lg-6">
            <div className="col-md-10 mx-auto col-lg-7 shadow-lg rounded-3">
              <form
                className="p-md-5 border rounded-3 bg-light"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="form-floating mb-3">
                  <input
                    onChange={(event) => {
                      const email = event.target.value;
                      userForm["email"] = email;
                    }}
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={(event) => {
                      const password = event.target.value;
                      userForm["password"] = password;
                    }}
                    id="senha"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Senha</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Lembrar de mim
                  </label>
                </div>
                <button
                  onClick={login}
                  id="btn-login"
                  className="w-100 btn btn-lg btn-primary"
                  type="submit"
                >
                  Login
                </button>
                <hr className="my-4" />
                <small className="text-muted">
                  Ainda não tem uma conta?
                  <a
                    className="text-muted text-decoration-none"
                    href="telaCadastro/telaCadastro.html"
                  >
                    Criar conta
                  </a>
                </small>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
