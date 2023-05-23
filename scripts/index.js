const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__button_add");
const profilePopup = document.querySelector(".popup_type_profile");
const profileAddPopup = document.querySelector(".popup_type_add");

const profileFormElement = document.querySelector(".popup__form_type_profile");
const profileAddformElement= document.querySelector(".popup__form_type_add");
const nameInput = document.querySelector(".popup__input_type_name");
const titleInput = document.querySelector(".popup__input_type_title");

const profileName = document.querySelector(".profile__title");
const profileTitle = document.querySelector(".profile__subtitle");

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

profileEditButton.addEventListener("click", function () {
  nameInput.value = profileName.textContent;
  titleInput.value = profileTitle.textContent;

  openPopup(profilePopup);
});

profileAddButton.addEventListener("click", function () {
  nameInput.value = profileName.textContent;
  titleInput.value = profileTitle.textContent;

  openPopup(profileAddPopup);
});

profilePopup.addEventListener("click", function (event) {
  if (
    
    event.target.classList.contains("popup__close")
  ) {
    closePopup(profilePopup);
  }
});


profileAddPopup.addEventListener("click", function (event) {
  if (
    
    event.target.classList.contains("popup__close")
  ) {
    closePopup(profileAddPopup);
  }
});



function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileTitle.textContent = titleInput.value;

  closePopup(profilePopup);
}

function handleProfileFormAddSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileTitle.textContent = titleInput.value;

  closePopup(profileAddPopup);
}







profileFormElement.addEventListener("submit", handleProfileFormSubmit);
profileAddformElement.addEventListener("submit",handleProfileFormAddSubmit);
