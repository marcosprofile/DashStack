document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const emailField = document.querySelector("#email");
  const passwordField = document.querySelector("#password");
  const submitBtn = document.querySelector("#submitBtn");
  const emailError = document.querySelector("#emailError");
  const passwordError = document.querySelector("#passwordError");

  function validateForm() {
    const isEmailValid = emailField.checkValidity();
    const isPasswordValid = passwordField.value.trim().length >= 8;

    if (!isEmailValid && emailField.dataset.touched === "true") {
      emailError.style.display = "inline";
    } else {
      emailError.style.display = "none";
    }

    if (!isPasswordValid && passwordField.dataset.touched === "true") {
      passwordError.style.display = "inline";
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
      window.location.href = "../dashboard/index.html";
    }
  });
});
