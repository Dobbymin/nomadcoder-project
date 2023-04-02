const usernameInput = document.getElementById("username-input");
const loginButton = document.getElementById("login-button");
const logoutButton = document.getElementById("logout-button");
const greeting = document.getElementById("greeting");
const loginForm = document.getElementById("login-form");

function saveUsername(username) {
  localStorage.setItem("username", username);
}

function loadUsername() {
  return localStorage.getItem("username");
}

loginButton.addEventListener("click", function () {
  if (usernameInput.value.trim() !== "") {
    saveUsername(usernameInput.value);
    showGreeting();
  }
});

logoutButton.addEventListener("click", function () {
  localStorage.removeItem("username");
  showGreeting();
});

function showGreeting() {
  const username = loadUsername();
  if (username) {
    greeting.innerHTML = `Welcome, ${username}!`;
    loginForm.style.display = "none";
  } else {
    greeting.innerHTML = "Please login.";
    loginForm.style.display = "block";
  }
}

showGreeting();
