const editButton = document.getElementById("editbutton");
const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopupBtn");
const submitBtn = document.getElementById("submitBtn");
const nameInput = document.getElementById("field1");
const aboutInput = document.getElementById("field2");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

editButton.addEventListener("click", function () {
  popup.style.display = "block";
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
});

closePopupBtn.addEventListener("click", function () {
  popup.style.display = "none";
});

submitBtn.addEventListener("click", function () {
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  popup.style.display = "none";
});
