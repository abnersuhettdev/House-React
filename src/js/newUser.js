const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //pegando o valor de cada input e tirando os espaços
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    //mostrar o erro
    //adicionar a classe error
    errorValidation(username, "Preencha esse campo");
  } else {
    //adicionar a classe de sucesso
    successValidation(username);
  }

  if (emailValue === "") {
    errorValidation(email, "Preencha esse campo");
  } else {
    successValidation(email);
  }

  if (passwordValue === "") {
    errorValidation(password, "Preencha esse campo");
  } else if (passwordValue.length < 8) {
    errorValidation(password, "A senha deve conter no minimo 8 caracteres");
  } else {
    successValidation(password);
  }

  if (password2Value === "") {
    errorValidation(password2, "Preencha esse campo");
  } else if (passwordValue !== password2Value) {
    errorValidation(password2, "As senhas estão diferentes");
  } else {
    successValidation(password2);
  }
}

function errorValidation(input, message) {
  //pegando a div PAI do input
  const formControl = input.parentElement;
  //pegando a tag small dentro da div
  const small = formControl.querySelector("small");
  //mudando a mensagem de erro
  small.innerText = message;

  formControl.className = "form-control error";
}

function successValidation(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}
