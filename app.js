let users = [];

function add() {
  let usersContainer = document.getElementById("storedData");
  usersContainer.innerHTML = "";

  users.forEach((a) => {
    let userDiv = document.createElement("div");
    userDiv.classList.add("nameUser");

    let nameUser = document.createElement("p");
    nameUser.innerText = a.name;

    let emailUser = document.createElement("p");
    emailUser.innerText = a.email;

    usersContainer.appendChild(userDiv);
    userDiv.appendChild(nameUser);
    userDiv.appendChild(emailUser);
  });
  if (users.length === 0) {
    alert("no user exist");
  } else {
    notifyAdded();
  }
}

function notifyAdded() {
  let addAlert = document.getElementById("alertDan");
  addAlert.classList.remove("alert");
  addAlert.classList.add("alert-added");
  setTimeout(() => {
    addAlert.classList.remove("alert-added");
    addAlert.classList.add("alert");
  }, 2000);
}

function notifyExist() {
  let alert = document.getElementById("alertSuc");
  alert.classList.remove("alert");
  alert.classList.add("alert-exist");
  setTimeout(() => {
      alert.classList.remove("alert-exist");
      alert.classList.add("alert");
    },2000);
}

function sendData() {
  let name = userName.value;
  let email = userEmail.value;

  let ifUserExist = users.some((user) => user.email === email);
  if (ifUserExist) {
    notifyExist();
    return;
  }
  let user = {
    name: name,
    email: email,
  };
  users.push(user);
  add();
  // this bottom code will clear input field after submit
  userName.value = "";
  userEmail.value = "";
}
