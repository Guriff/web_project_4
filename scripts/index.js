const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__button-add");

const profilePopup = document.querySelector(".popup_type_profile");
const profileAddPopup = document.querySelector(".popup_type_add");
const picPopup = document.querySelector(".popup_type_pic");



const profileFormElement = document.querySelector(".popup__form_type_profile");
const profileAddFormElement= document.querySelector(".popup__form_type_add");


const nameInput = document.querySelector(".popup__input_type_name");
const titleInput = document.querySelector(".popup__input_type_title");
const cardNameInput = document.querySelector(".popup__input_type_place");
const cardLinkInput = document.querySelector(".popup__input_type_link");
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



const picCloseButton = document.querySelector(".popup_type_pic .popup__close");

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
  closePopup(profileAddPopup);
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
profileAddFormElement.addEventListener("submit",handleProfileFormAddSubmit);

const placesWrapper = document.querySelector(".cards__card");
const cardTemplate = document.querySelector("#card-template").content.querySelector(".cards__content")

const getCardElement = (data) => {
  const cardElement = cardTemplate.cloneNode(true);
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImages = cardElement.querySelector(".cards__image");
  const cardTitle = cardElement.querySelector(".cards__title");
  cardImages.style.backgroundImage ="url(" + data.link + ")";
  cardTitle.innerHTML = data.name;


  
  likeButton.addEventListener("click", function () {
     likeButton.classList.toggle("card__like-button_active");
  });

  const deleteButton = cardElement.querySelector(".cards__delete-button");
  deleteButton.addEventListener("click", function (event) {
    event.stopPropagation();
    deleteCard(cardElement);
  });


  cardImages.addEventListener('click', () =>
openImagePopup(data.name, data.link));

  return cardElement;
};

function openImagePopup(title, imageUrl){
  const picImage = document.querySelector(".popup__pic-image");
  const popupPicTitle = document.querySelector(".popup__pic-title");
  
  popupPicTitle.textContent = title;
  picImage.src =imageUrl;
  
  openPopup(picPopup);
  
  
  
  };

const renderCard = (data,wrap) => {
  const cardItem = getCardElement(data);
  const deleteButton = cardItem.querySelector(".cards__delete-button");
  deleteButton.addEventListener("click", function () {
    deleteCard(cardItem);
  });

  wrap.appendChild(cardItem);
};

initialCards.forEach((cardObject) => {
 renderCard(cardObject, placesWrapper);
});

const addCardToInitialCards = (name, link) => {
  const newCard = {
    name: name,
    link: link
  };
  initialCards.push(newCard);
  renderCard(newCard, placesWrapper);
};

const addCardButton = profileAddPopup.querySelector(".popup__submit-btn");

addCardButton.addEventListener("click", function () {
  const cardName = cardNameInput.value;
  const cardLink = cardLinkInput.value;
  addCardToInitialCards(cardName, cardLink);
});

function deleteCard(cardElement) {
  const cardTitle = cardElement.querySelector(".cards__title").textContent;
  const cardLink = cardElement.querySelector(".cards__image").style.backgroundImage.slice(4, -1).replace(/"/g, "");

  const index = initialCards.findIndex((card) => {
    return card.name === cardTitle && card.link === cardLink;
  });

  if (index > -1) {
    initialCards.splice(index, 1);
  }

  cardElement.remove();
};





