// === POPUP EDITAR PERFIL ===
const editButton = document.getElementById("editbutton");
const profilePopup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopupBtn");
const submitBtn = document.getElementById("submitBtn");
const nameInput = document.getElementById("field1");
const aboutInput = document.getElementById("field2");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

editButton.addEventListener("click", () => {
  profilePopup.style.display = "flex";
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
});

closePopupBtn.addEventListener("click", () => {
  profilePopup.style.display = "none";
});

submitBtn.addEventListener("click", () => {
  profileName.textContent = nameInput.value.trim() || profileName.textContent;
  profileAbout.textContent =
    aboutInput.value.trim() || profileAbout.textContent;
  profilePopup.style.display = "none";
});

// === POPUP AÑADIR TARJETA ===
const addCardBtn = document.getElementById("addcard");
const popupAddCard = document.getElementById("popupAddCard");
const closeAddCardBtn = document.getElementById("closeAddCardBtn");
const createCardBtn = document.getElementById("createCardBtn");
const cardTitleInput = document.getElementById("cardTitle");
const cardImageInput = document.getElementById("cardImage");
const elementsSection = document.querySelector(".elements");

addCardBtn.addEventListener("click", () => {
  popupAddCard.style.display = "flex";
  cardTitleInput.value = "";
  cardImageInput.value = "";
});

closeAddCardBtn.addEventListener("click", () => {
  popupAddCard.style.display = "none";
});

// === POPUP IMAGEN ===
const popupImage = document.getElementById("popupImage");
const popupImageContent = document.getElementById("popupImageContent");
const closeImageBtn = document.getElementById("closeImageBtn");

closeImageBtn.addEventListener("click", () => {
  popupImage.style.display = "none";
});

popupImage.addEventListener("click", (e) => {
  if (e.target === popupImage) {
    popupImage.style.display = "none";
  }
});

// === FUNCIONES AUXILIARES ===
function addHeartEvent(heart) {
  heart.addEventListener("click", () => {
    if (heart.src.includes("heart.svg")) {
      heart.src = "./images/heart-black.svg";
    } else {
      heart.src = "./images/heart.svg";
    }
  });
}

function addDeleteEvent(deleteBtn) {
  deleteBtn.addEventListener("click", () => {
    const card = deleteBtn.closest(".element");
    card.remove();
  });
}

function addImagePopupEvent(img) {
  img.addEventListener("click", () => {
    popupImage.style.display = "flex";
    popupImageContent.src = img.src;
    popupImageContent.alt = img.alt;
  });
}

// Asignar eventos a tarjetas existentes
document.querySelectorAll(".element__name-image").forEach(addHeartEvent);
document.querySelectorAll(".element__delete").forEach(addDeleteEvent);
document.querySelectorAll(".element__image").forEach(addImagePopupEvent);

// Crear nueva tarjeta
createCardBtn.addEventListener("click", () => {
  const title = cardTitleInput.value.trim();
  const imageUrl = cardImageInput.value.trim();

  if (title && imageUrl) {
    const newCard = document.createElement("div");
    newCard.classList.add("element");
    newCard.innerHTML = `
      <img src="${imageUrl}" alt="${title}" class="element__image" />
      <img src="./images/delete.png" alt="Eliminar" class="element__delete" />
      <div class="element__name">
        <p class="element__name-text">${title}</p>
        <img src="./images/heart.svg" alt="boton like" class="element__name-image" />
      </div>
    `;

    elementsSection.prepend(newCard);

    addHeartEvent(newCard.querySelector(".element__name-image"));
    addDeleteEvent(newCard.querySelector(".element__delete"));
    addImagePopupEvent(newCard.querySelector(".element__image"));

    popupAddCard.style.display = "none";
  } else {
    alert("Por favor completa todos los campos");
  }
});
