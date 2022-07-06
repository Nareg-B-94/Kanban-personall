function goToAddTaskHTML() {
  window.location.href = "addTask.html";
}

function goToBoard() {
  window.location.href = "board.html";
};

function goToBacklog() {
  window.location.href = "backlog.html";
};

let todos = [{}];


async function initBoard() {
  await init();
  let boardCon = document.getElementById('boardConToDo');
  boardCon.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    boardCon.innerHTML += `
    <div onclick="fullScreenTask(${i})"
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

function updateHTML(){};

function fullScreenTask(x){
  document.getElementById('fullscreenCon').classList.remove('displayNone');
  let fullscreen = document.getElementById('fullScreenTwo');
  const task = tasks[x]
  fullscreen.innerHTML ='';
  fullscreen.innerHTML += `
  <div id="fullscreen${x}" class="fullscreen">
            <div id="boardConToDoFullScreen">
              <div class="firstRowFullScreen">
                <img src="img/${task['selectedUsers'][0]['picture']}">
                <span class="nameFullScreen"> ${task.selectedUsers[0]['name']}</span>
              </div>
              <div class="secondRowFullScreen">
                <div class="descriFullScreen">
                  ${task.description}
                </div>
              </div>
              <div class="thirdRowFullScreen">
                <div class="contentThirdRowFullScreen">
                  <div class="content1">Urgecy&nbsp;&nbsp;: ${task.urgency}  </div>
                  <div class="content2">Due Date&nbsp;&nbsp;: ${task.date} </div>
                </div>
              </div>
              <div class="fouthRowFullScreen">created at&nbsp;&nbsp;: ${task.createdAt}</div>
            </div>
          </div>
  `
  let bgColor = document.getElementById('fullscreen' + x);
  let urgencyCol = task['urgency'];

  if (urgencyCol == "High") {
    bgColor.classList.add('urgencyColorRed');
  };
  if (urgencyCol == "Medium") {
    bgColor.classList.add('urgencyColorOrange');
  }; if (urgencyCol == "High") {
    bgColor.classList.add('urgencyColorOrange');
  };



  x.stopPropagation();
};
