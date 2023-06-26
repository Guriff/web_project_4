function enableValidation(props) {
  const formElement = document.querySelector(props.formSelector);
  const inputElements = Array.from(
    formElement.querySelectorAll(props.inputSelector)
  );
  const submitButtonElement = formElement.querySelector(
    props.submitButtonSelector
  );

  function showError(inputElement) {
    const errorElement = inputElement.nextElementSibling;
    inputElement.classList.add(props.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(props.errorClass);
  }
  
  function hideError(inputElement) {
    const errorElement = inputElement.nextElementSibling;
    inputElement.classList.remove(props.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(props.errorClass);
  }

  function checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      showError(inputElement);
    } else {
      hideError(inputElement);
    }
  }

  function toggleButtonState() {
    const isValid = inputElements.every(
      (inputElement) => inputElement.validity.valid
    );
    if (isValid) {
      submitButtonElement.disabled = false;
      submitButtonElement.classList.remove(props.inactiveButtonClass);
    } else {
      submitButtonElement.disabled = true;
      submitButtonElement.classList.add(props.inactiveButtonClass);
    }
  }

  function setEventListeners() {
    inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(inputElement);
        toggleButtonState();
      });
    });

    formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
      toggleButtonState();
  }

  setEventListeners();
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-btn",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

enableValidation({
    formSelector: ".popup__form_type_add",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-btn",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  });

  