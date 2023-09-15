const loginModal = document.querySelector(".login");
const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector("#name-form input");

const profileFirstTxt = document.querySelector(".profile div");
const profileName = document.querySelector(".name");

const onLoginSubmit = (e) => {
  e.preventDefault();

  const userName = nameInput.value;
  // console.log(nameInput.value);
  if (userName) {
    const userNameSplit = userName.split("");

    loginModal.classList.add("none");
    profileFirstTxt.innerText = userNameSplit[0];
    profileName.innerText = userName;
  }
};

nameForm.addEventListener("submit", onLoginSubmit);
