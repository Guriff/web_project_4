const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__button-add");

const profilePopup = document.querySelector(".popup_type_profile");
const profileAddPopup = document.querySelector(".popup_type_add");
const picPopup = document.querySelector(".popup_type_pic");

const profileFormElement = document.querySelector(".popup__form_type_profile");
const profileAddFormElement = document.querySelector(".popup__form_type_add");

const nameInput = document.querySelector(".popup__input_type_name");
const titleInput = document.querySelector(".popup__input_type_title");
const cardNameInput = document.querySelector(".popup__input_type_place");
const cardLinkInput = document.querySelector(".popup__input_type_link");
const profileName = document.querySelector(".profile__title");
const profileTitle = document.querySelector(".profile__subtitle");

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];


function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

profileEditButton.addEventListener("click", function () {
  nameInput.value = profileName.textContent;
  titleInput.value = profileTitle.textContent;

  openPopup(profilePopup);
});

profileAddButton.addEventListener("click", function () {
  openPopup(profileAddPopup);
});

const picCloseButton = picPopup.querySelector(".popup_type_pic .popup__close");

picCloseButton.addEventListener("click", function () {
  closePopup(picPopup);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileTitle.textContent = titleInput.value;

  closePopup(profilePopup);
}

function handleProfileFormAddSubmit(evt) {
  evt.preventDefault();

  const formData = new FormData(profileAddFormElement);

  if (formData.get('placeName') && formData.get('imageUrl')) {
    renderCard({ name: formData.get('placeName'), link: formData.get('imageUrl') }, placesWrapper);
    profileAddFormElement.reset();
  }

  closePopup(profileAddPopup);
}

profileAddFormElement.addEventListener("submit", handleProfileFormAddSubmit);

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function deleteCard(cardElement) {
  cardElement.remove();
}

const placesWrapper = document.querySelector(".cards__card");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".cards__content");

const renderCard = (data, wrap) => {
  const cardElement = getCardElement(data);
  wrap.appendChild(cardElement);
};

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".cards__title");
  cardImage.style.backgroundImage = "url(" + data.link + ")";
  cardTitle.textContent = data.name;

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("card__like-button_active");
  });

  const deleteButton = cardElement.querySelector(".cards__delete-button");
  deleteButton.addEventListener("click", function (event) {
    event.stopPropagation();
    deleteCard(cardElement);
  });

  cardImage.addEventListener("click", () =>
    openImagePopup(data.name, data.link)
  );

  return cardElement;
}

function openImagePopup(title, imageUrl) {
  const picImage = document.querySelector(".popup__pic-image");
  const popupPicTitle = document.querySelector(".popup__pic-title");

  popupPicTitle.textContent = title;
  picImage.src = imageUrl;
  picImage.alt = `Photo of ${title}`;

  openPopup(picPopup);
}

initialCards.forEach((cardObject) => {
  renderCard(cardObject, placesWrapper);
});

const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("mousedown", function (event) {
    if (event.target === event.currentTarget) {
      closePopup(event.target);
    }
  });
});

function closePopupOnEsc(event) {
  if (event.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");
    if (openPopup) {
      closePopup(openPopup);
    }
  }
}

document.addEventListener("keydown", closePopupOnEsc);