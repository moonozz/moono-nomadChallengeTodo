const loginModal = document.querySelector(".login");
const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector("#name-form input");

const profileFirstTxt = document.querySelector(".profile div");
const profileName = document.querySelector(".name");

const NAME_KEY = "name";
const getUserName = localStorage.getItem(NAME_KEY);

// username 입력하고 로컬에 저장하기
const onLoginSubmit = (e) => {
  e.preventDefault();

  const userName = nameInput.value;

  if (userName) {
    loginModal.classList.add("none");
    paintUserName(userName);

    localStorage.setItem(NAME_KEY, userName);
  }
};

// 반복되는 항복 함수로 만들어주기
const paintUserName = (username) => {
  const userNameSplit = username.split("");

  profileFirstTxt.innerText = userNameSplit[0];
  profileName.innerText = username;
};

// 로컬에 name이 저장되어있다면 가져오기
if (getUserName === null) {
  loginModal.classList.remove("none");
  nameForm.addEventListener("submit", onLoginSubmit);
} else {
  loginModal.classList.add("none");
  paintUserName(getUserName);
}
