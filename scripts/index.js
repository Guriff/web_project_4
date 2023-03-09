const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddbutton = document.querySelector(".profile__button");
const profilePopup = document.querySelector(".popup_type_profile");
const addPopup = document.querySelector(".popup_type_add");

const profileFormElement = document.querySelector(".popup__form_type_profile");
const addFormElement = document.querySelector(".popup__form_type_add");

const nameInput = document.querySelector(".popup__input_type_name");
const titleInput = document.querySelector(".popup__input_type_title");

const profileName = document.querySelector(".profile__title");
const profileTitle = document.querySelector(".profile__subtitle");



const cardTemplate = document.querySelector("#card-template");
const card = cardTemplate.content.querySelector(".card").cloneNode(true);
const cardList = document.querySelector(".cards");


function createCard(data) {

  const imageElement = card.querySelector(".card__image");
  const titleElement = card.querySelector(".card__title");

  imageElement.src = data.url
  titleElement.textContent = data.title;
  return card;
  
};

function addCardToPage(card){
  cardList.prepend(card);
  }

  addCardToPage(createCard({
    url:"https://images.unsplash.com/photo-1678308860535-210ff0f57af6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
    title:"splash",
  
  }));
  addCardToPage(createCard({
    url:"https://images.unsplash.com/photo-1678308860535-210ff0f57af6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
    title:"splash",
  
  }));
  addCardToPage(createCard({
    url:"https://images.unsplash.com/photo-1678308860535-210ff0f57af6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
    title:"splash",
  
  }));
  addCardToPage(createCard({
    url:"https://images.unsplash.com/photo-1678308860535-210ff0f57af6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
    title:"splash",
  
  }));
  






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
