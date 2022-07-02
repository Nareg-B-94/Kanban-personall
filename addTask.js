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
let selectedUsers = [];

//Renders the Avatars
function render() {
  document.getElementById("avatars");
  avatars.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    avatars.innerHTML += `
        <img id="user-${i}" onclick="selectedAvatar(${i})" class="avatarPic" src="img/${user}" alt="">
        `;
  }
}

//Selects and filters and pushes the avatar to the Array
function selectedAvatar(i) {
  let selectedUser = document.getElementById("user-" + i);
  selectedUser.classList.toggle("avatarSelected");
  if (selectedUsers.includes(users[i])) {
    selectedUsers = selectedUsers.filter((a) => a != users[i]);
  } else {
    selectedUsers.push(users[i]);
  }
}

//cancels the Task and gets back to board.html
function cancelTask() {
  window.location.href = "board.html";
}

//Creates the Task and adds it to the board.html
function createTheTask() {}
