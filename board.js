function goToAddTaskHTML() {
  window.location.href = "addTask.html";
}

function goToBoard() {
  window.location.href = "board.html";
};

function goToBacklog() {
  window.location.href = "backlog.html";
};


async function initBoard() {
  await init();
  let boardCon = document.getElementById('boardConToDo');
  boardCon.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    boardCon.innerHTML += `
    <div onclick="fullScreenTask()"
          class="createdTask"
            id="boardConToDo">
              <div class="nameSpan">
                To: &nbsp; ${task.selectedUsers[0]['name']} <br> <img src="img/${task['selectedUsers'][0]['picture']}">
              </div>
              <br>
              <div class="descSpan">
                Desc.: &nbsp; ${task.description}
              </div>
              <br/>
              <div class="dueDateSpan">
                 Due Date: &nbsp; ${task.date}
              </div>
              <br/>
              <div class="urgencySpan">
                Priority: &nbsp; ${task.urgency}
              </div>
              <br/>
              <div class="createdAtSpan">
                Created At: &nbsp;${task.createdAt}
              </div>
              <br/>
    </div>
    `

  }


  // await updateTasks();



};

// function updateHTML(){};

// function fullScreenTask(){};
