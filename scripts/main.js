// Responsive nav

const menuBtn = document.getElementById("menu-btn");
const mainMenu = document.getElementById("main-menu")

function toggleMenu() {
    mainMenu.classList.toggle("visible")
}
menuBtn.addEventListener("click", toggleMenu)










// Login Variables

const loginEmail = document.getElementById("login-email"),
  loginPassword = document.getElementById("login-password"),
  loginSubmitBtn = document.getElementById("login-submit"),
  signUpEmail = document.getElementById("signup-email"),
  signUpPassword = document.getElementById("signup-password"),
  signUpSubmitBtn = document.getElementById("signup-submit"),
  error = document.getElementById("error-msg");

const users = [
  {
    name: "Seif Omran",
    email: "seif@gmail.com",
    pass: "123456789",
    address: "Obour City",
    isAdmin: false,
  },
  {
    name: "Ahmed",
    email: "a@gmail.com",
    pass: "testtest123",
    address: "Obour City",
    isAdmin: false,
  },
  {
    name: "Mohamed",
    email: "m@gmail.com",
    pass: "asd123456",
    address: "Obour City",
    isAdmin: false,
  },
  {
    name: "admin",
    email: "admin@test.com",
    pass: "admin",
    address: "Obour City",
    isAdmin: true,
  },
];

function isEmpty(email, pass) {
  if (email.value == "" || pass.value == "") {
    // Checking if inputs empty
    error.innerText = "Please Enter Email and Password";
    email.classList.add("wrong");
    pass.classList.add("wrong");
    return "empty";
  }
}

function userAuth(userEmail, userPass, users) {
  for (let i = 0; i < users.length; i++) {
    if (userEmail.value == users[i].email && userPass.value == users[i].pass) {
      if (users[i].isAdmin) {
        window.location.pathname = "/admin.html";
        return false;
      } else {
        return true;
      }
    }
  }
}

function loginValidation() {
  if (isEmpty(loginEmail, loginPassword) == "empty") {
    return false;
  } else if (userAuth(loginEmail, loginPassword, users)) {
    return true;
  } else {
    error.innerText = "Invalid Login Details";
    return false;
  }
}

function signUpValidation() {
  if (isEmpty(signUpEmail, signUpPassword)) {
    return false;
  } else {
    if (
      signUpEmail.value.indexOf("@") == -1 ||
      signUpEmail.value.substr(signUpEmail.value.indexOf("@")).indexOf(".") ==
        -1
    ) {
      error.innerText = "Invalid Email";
      return false;
    } else if (signUpPassword.value.length < 8) {
      error.innerText =
        "Please Enter Password consists of 8 charachters or more";
      return false;
    } else {
      return true;
    }
  }
}

function viewUsers() {
  const usersTable = document.getElementById("users-table");
  for (let i = 0; i < users.length; i++) {
    let tableRow = document.createElement("tr");

    let name = document.createElement("td");
    let address = document.createElement("td");
    let email = document.createElement("td");
    let ops = document.createElement("td");

    name.innerText = `${users[i]["name"]}`;
    address.innerText = `${users[i]["address"]}`;
    email.innerText = `${users[i]["email"]}`;
    ops.innerHTML = `<a href="#">View </a> <a href="#">Ban </a> <a href="#">Delete </a>`;
    


    tableRow.append(name, email, address, ops);

    usersTable.append(tableRow);
  }
}
viewUsers();
