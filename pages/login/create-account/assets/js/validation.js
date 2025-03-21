document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const emailField = document.querySelector("#email");
  const usernameField = document.querySelector("#username");
  const passwordField = document.querySelector("#password");
  const submitBtn = document.querySelector("#submitBtn");
  const emailError = document.querySelector("#emailError");
  const usernameError = document.querySelector("#usernameError");
  const passwordError = document.querySelector("#passwordError");
  const acceptTermsCheckbox = document.querySelector("#accept-terms");

  function validateForm() {
    const isEmailValid = emailField.checkValidity();
    const isUsernameValid = usernameField.value.trim().length > 0;
    const isPasswordValid = passwordField.value.trim().length >= 8;
    const isCheckboxChecked = acceptTermsCheckbox.checked;

    if (!isEmailValid && emailField.dataset.touched === "true") {
      emailError.style.display = "inline";
    } else {
      emailError.style.display = "none";
    }

    if (!isUsernameValid && usernameField.dataset.touched === "true") {
      usernameError.style.display = "inline";
    } else {
      usernameError.style.display = "none";
    }

    if (!isPasswordValid && passwordField.dataset.touched === "true") {
      passwordError.style.display = "inline";
    } else {
      passwordError.style.display = "none";
    }

    submitBtn.disabled = !(isEmailValid && isUsernameValid && isPasswordValid && isCheckboxChecked);
  }

  emailField.addEventListener("blur", function () {
    emailField.dataset.touched = "true";
    validateForm();
  });

  usernameField.addEventListener("blur", function () {
    usernameField.dataset.touched = "true";
    validateForm();
  });

  passwordField.addEventListener("blur", function () {
    passwordField.dataset.touched = "true";
    validateForm();
  });

  emailField.addEventListener("input", validateForm);
  usernameField.addEventListener("input", validateForm);
  passwordField.addEventListener("input", validateForm);

  acceptTermsCheckbox.addEventListener("change", validateForm);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!submitBtn.disabled) {
      window.location.href = "../../dashboard/index.html";
    }
  });
});
