document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const emailField = document.querySelector("#email");
  const passwordField = document.querySelector("#password");
  const submitBtn = document.querySelector("#submitBtn");
  const emailError = document.querySelector("#emailError");
  const passwordError = document.querySelector("#passwordError");
  const rememberCheckbox = document.querySelector("#remember");

  if (localStorage.getItem("email") && localStorage.getItem("password")) {
    emailField.value = localStorage.getItem("email");
    passwordField.value = localStorage.getItem("password");
    rememberCheckbox.checked = true;
    validateForm();
  }

  function validateForm() {
    const isEmailValid = emailField.checkValidity();
    const isPasswordValid = isEmailValid && passwordField.value.trim().length >= 8;

    if (!isEmailValid && emailField.dataset.touched === "true") {
      emailError.style.display = "inline";
    } else {
      emailError.style.display = "none";
    }

    if (isEmailValid) {
      if (!isPasswordValid && passwordField.dataset.touched === "true") {
        passwordError.style.display = "inline";
      } else {
        passwordError.style.display = "none";
      }
    } else {
      passwordError.style.display = "none";
    }

    submitBtn.disabled = !(isEmailValid && isPasswordValid);
  }

  emailField.addEventListener("blur", function () {
    emailField.dataset.touched = "true";
    validateForm();
  });

  passwordField.addEventListener("blur", function () {
    passwordField.dataset.touched = "true";
    validateForm();
  });

  emailField.addEventListener("input", validateForm);
  passwordField.addEventListener("input", validateForm);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!submitBtn.disabled) {
      if (rememberCheckbox.checked) {
        localStorage.setItem("email", emailField.value);
        localStorage.setItem("password", passwordField.value);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }

      window.location.href = "../dashboard/index.html";
    }
  });

  const logoutButton = document.querySelector("#logoutBtn");
  logoutButton.addEventListener("click", function () {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "../login/index.html";
  });
});