let users = [
  {
    'picture': 'a1.PNG',
    'name': 'Eden Hazard',
    'email': 'eden.hazard@company-email.com',
  },
  {
    'picture': 'a2.PNG',
    'name': 'Salma Hayek',
    'email': 'salma.hayek@company-email.com',
  },
  {
    'picture': 'a3.PNG',
    'name': 'miss Redhead',
    'email': 'redhead@company-email.com'
  },
  {
    'picture': 'a4.PNG',
    'name': 'Slavik Bratan',
    'email': 'bratinkaSlavo@company-email.com'
  }
];


let tasks = []; //The JSON that will be transported between the pages.

let selectedUsers = [];
let title;
let date;
let category;
let urgency;
let description;
let createdAt;
let Users = [];




//initiates the backend server
async function init() {
  await downloadFromServer();
  tasks = backend.getItem("tasks") || [];
};

// //add a user
// async function addUser() {
//   users.push('John);
//     await backend.setItem('users', JSON.stringify(users));
// }


//Renders the Avatars
function render() {
  document.getElementById("avatars");
  avatars.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    const user = users[i]['picture'];
    avatars.innerHTML += `
        <img id="user-${i}" onclick="selectedAvatar(${i})" class="avatarPic" src="../img/${user}" alt="">
        `;
  }
}


//Selects and filters and pushes the avatar to the Array
function selectedAvatar(i) {
  let create = document.getElementById('createBtn');
  let selectedUser = document.getElementById("user-" + i);
  selectedUser.classList.toggle("avatarSelected");

  if (selectedUsers.includes(users[i])) {
    selectedUsers = selectedUsers.filter((a) => a != users[i]);
  } else {
    selectedUsers.push(users[i]);
  }
  create.classList.remove('disabled');
  create.disabled = false;
}

//cancels the Task and gets back to board.html
function cancelTask() {
  window.location.href = "board.html";
};

//storing the values of the fields in the global variables
function saveValues() {
  title = document.getElementById('title').value;
  date = document.getElementById('datePicker').value;
  category = document.getElementById('category').value;
  urgency = document.getElementById('urgency').value;
  description = document.getElementById('description').value;

};

//Creates the Task and adds it to the board.html
async function createTheTask(event) {
  saveValues();
  let time = new Date().getTime();
  createdAt = new Date(time).toLocaleString(); //uploads the date in a text form
  event.preventDefault();
  tasks.push({
    title, date, category, urgency, description, createdAt, selectedUsers
  })
  console.log(tasks);
  await backend.setItem("tasks", tasks); //saves the Tasks JSON in backend
  clearInputFields();
  setTimeout(() => {
    window.location.href = "board.html";
  }, 3000);

};


function clearInputFields() {
  saveValues();
  title.value = ``;
  date.value = ``;
  category.value = ``;
  urgency.value = ``;
  description.value = ``;
}


function goToBoard() {
  window.location.href = "board.html";
};

function goToBacklog() {
  window.location.href = "backlog.html";
};