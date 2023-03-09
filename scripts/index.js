//Warppers
const modelWindow = document.querySelector(".popup");
const editForm = document.querySelector(".popup__form");

//Buttons and other DOM elements
const profileEditButton = document.querySelector(".profile__edit-button");
const modelCloseButton = document.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//form data
const titleInputValue = editForm.querySelector(".popup__input_type_name");
const descriptionInputValue = editForm.querySelector(".popup__input_type_description");

//card and template

function toggleModelWindow() {
  if (!modelWindow.cardList.contain("popup_is")) {
    titleInputValue.value = profileTitle.textContent;
    descriptionInputValue.value = profileDescription.textContent;
  }
    modelWindow.classList.toggle("popup_is-opened");
  };

  function formSubmitHandler(evt) {
    evt.preventDefult();
    profileTitle.textContent = titleInputValue;
    profileDescription.textContent = descriptionInputValue.value;
    toggleModelWindow();
  }


  editForm.addEventListener("submit" , formSubmitHandler);
  profileEditButton.addEventListener("click", toggleModelWindow);
  modelCloseButton.addEventListener("click" ,toggleModelWindow);

  const cardTemplate = document.querySelector("#card-template");
  const cardList = document.querySelector(".cards");
  


function createCard(data) {
  const card = cardTemplate.content.querySelector(".card").cloneNode(true);
  const imageElement = card.querySelector(".card__image");
  const titleElement = card.querySelector(".card__title");

  imageElement.src = data.url
  titleElement.textContent = data.title;
  return card;
  
};

function addCardToPage(card){
  cardList.prepend(card);
  }

  function renderCard(data) {
    addCardToPage(createCard(data))

  }

  const initialCards = [
    {
      title: "Yosemite Valley",
      url: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
    },
    {
      title: "Lake Louise",
      url: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
    },
    {
      title: "Bald Mountains",
      url: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
    },
    {
      title: "Latemar",
      url: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
    },
    {
      title: "Vanoise National Park",
      url: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
    },
    {
      title: "Lago di Braies",
      url: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
    }
  ];

  initialCards.forEach((cardData) => {
    renderCard(cardData);
    
  });





