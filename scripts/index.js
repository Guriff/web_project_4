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

const cardList = document.querySelector(".cards");


function createCard(data) {
  const card = cardTemplate.querySelector(".card");
  const imageElement = card.querySelector(".card__image");
  const titleElement = card.querySelector(".card__title");

  imageElement.src = data.url;
  titleElement.textContent = data.title;
  return card;
  
};

function addCardToPage(card){
cardList.prepend(card);
}

addCardToPage(createCard({
  url:"https://unsplash.com/photos/Ete0zMKPWys",
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
