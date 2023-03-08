const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddbutton = document.querySelector(".profile__button");
const profilePopup = document.querySelector(".popup_type_profile");
const addPopup = document.querySelector("popup_type_add");

const profileFormElement = document.querySelector(".popup__form_type_profile");
const addFormElement = document.querySelector("popup__form_type_add");

const nameInput = document.querySelector(".popup__input_type_name");
const titleInput = document.querySelector(".popup__input_type_title");

const profileName = document.querySelector(".profile__title");
const profileTitle = document.querySelector(".profile__subtitle");
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

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

profileAddbutton.addEventListener("click", function() {

  openPopup(addPopup);


});



profilePopup.addEventListener("click", function (event) {
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
