function goToAddTaskHTML() {
  window.location.href = "addTask.html";
}

function goToBoard() {
  window.location.href = "board.html";
};

function goToBacklog() {
  window.location.href = "backlog.html";
};



async function init() {
  await downloadFromServer();
  users = JSON.parse(backend.getItem('users')) || [];
};