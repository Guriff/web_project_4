const profileEditButton = document.querySelector(".profile__edit-button");
const profilePopup = document.querySelector(".popup_type_profile");

const profileFormElement = document.querySelector(".popup__form_type_profile");

const nameInput = document.querySelector(".popup__input_type_name");
const titleInput = document.querySelector(".popup__input_type_title");

const profileName = document.querySelector(".profile__title");
const profileTitle = document.querySelector(".profile__subtitle");

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function openPopup(popup) {
  nameInput.value = profileName.textContent;
  titleInput.value = profileTitle.textContent;
  popup.classList.add("popup_opened");
}

profileEditButton.addEventListener("click", function () {
 

  openPopup(profilePopup);
});

profilePopup.addEventListener("click", function openPopup (event) {
  if (
    
    event.target.classList.contains("popup__close")
  ) {
    closePopup(profilePopup);
  }
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileTitle.textContent = titleInput.value;

  closePopup(profilePopup);
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
