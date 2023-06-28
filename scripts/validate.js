function showError(inputElement, errorElement, errorMessage, props) {
  inputElement.classList.add(props.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(props.errorClass);
}

function hideError(inputElement, errorElement, props) {
  inputElement.classList.remove(props.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(props.errorClass);
}

function checkInputValidity(inputElement, errorElement, props) {
  if (!inputElement.validity.valid) {
    showError(inputElement, errorElement, inputElement.validationMessage, props);
  } else {
    hideError(inputElement, errorElement, props);
  }
}

function toggleButtonState(formElement, submitButtonElement, inputElements, props) {
  const isValid = inputElements.every(
    (inputElement) => inputElement.validity.valid
  );
  submitButtonElement.disabled = !isValid;
  submitButtonElement.classList.toggle(props.inactiveButtonClass, !isValid);
}

function resetForm(formElement, submitButtonElement, inputElements, props) {
  formElement.reset();
  toggleButtonState(formElement, submitButtonElement, inputElements, props);
}

function setEventListeners(formElement, props) {
  const inputElements = Array.from(
    formElement.querySelectorAll(props.inputSelector)
  );
  const submitButtonElement = formElement.querySelector(
    props.submitButtonSelector
  );

  function handleFormSubmit(evt) {
    evt.preventDefault();
  }

  function handleInputChange(evt) {
    const inputElement = evt.target;
    const errorElement = inputElement.nextElementSibling;
    checkInputValidity(inputElement, errorElement, props);
    toggleButtonState(formElement, submitButtonElement, inputElements, props);
  }

  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", handleInputChange);
  });

  formElement.addEventListener("submit", handleFormSubmit);

  resetForm(formElement, submitButtonElement, inputElements, props);
}

function enableValidation(props) {
  const formElements = document.querySelectorAll(props.formSelector);

  formElements.forEach((formElement) => {
    setEventListeners(formElement, props);
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-btn",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
