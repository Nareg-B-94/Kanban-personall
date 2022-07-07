
// Quick navigation functions
function goToAddTaskHTML() {
  window.location.href = "addTask.html";
}

function goToBoard() {
  window.location.href = "board.html";
};

function goToBacklog() {
  window.location.href = "backlog.html";
};

// Closes the fullscreen opened Task
function closeFullScreen() {
  document.getElementById('fullscreenCon').classList.add('displayNone');
};

// Global Variables for Drag and Drop

setTimeout(() => {

}, 10000);
let progresses = document.getElementById('boardConInProgress');
let testings = document.getElementById('boardConTesting');
let dones = document.getElementById('boardConDone');
let currentDraggedTask;


// ************************test*********************//

// const draggables = document.querySelectorAll('draggable');
// const containerToDO = document.getElementById('toDoCon');
// const containerBoardCon = document.getElementById('boardCon');
// const containerTestingCon = document.getElementById('testingCon');
// const containerDoneCon = document.getElementById('doneCon');

// draggables.forEach(draggable => {
//   draggable.addEventListener('dragstart', () => {
//     draggable.classList.add('draging')
//   })
// })



// draggable.addEventListener('dragend', () => {
//   draggables.classList.remove('draggin')
// })



// containerToDO.forEach(container => {
//   container.addEventListener('dragover', e => {
//     e.preventDefault()
//     console.log('Drop!')
//     const draggable = document.querySelecto('draggable')
//     container.appendChild(draggable)
//   })
// });

// containerBoardCon.forEach(container => {
//   container.addEventListener('dragover', e => {
//     e.preventDefault()
//     console.log('Drop!')
//     const draggable = document.querySelecto('draggable')
//     container.appendChild(draggable)
//   })
// });
// containerTestingCon.forEach(container => {
//   container.addEventListener('dragover', e => {
//     e.preventDefault()
//     console.log('Drop!')
//     const draggable = document.querySelecto('draggable')
//     container.appendChild(draggable)
//   })
// });
// containerDoneCon.forEach(container => {
//   container.addEventListener('dragover', e => {
//     e.preventDefault()
//     console.log('Drop!')
//     const draggable = document.querySelecto('draggable')
//     container.appendChild(draggable)
//   })
// });

// function getDragAfterElement(container, y) {
//  const draggableElements = [...container.querySelectorAll('draggable: not(dragging)')]

//  draggableElements.reduce()
// }



// ************************test*********************//


//Initializes the rendering of the Tasks from the Server and displays them
async function initBoard() {
  await init();
  let todos = document.getElementById('boardConToDo');


  // let boardCon = document.getElementById('boardConToDo');
  todos.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    todos.innerHTML += `
    <div onclick="fullScreenTask(${i}); event.stopPropagation()"
          draggable="true" ondragstart="startDragging()" class="createdTask draggable"
            id="boardConToDo${i}">
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
    </div>  `
  };

  await updateTasks();

};

function updateTasks() {
  let todo = tasks.filter(t => t['position'] == 'todoFromAddTask');
  todos.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    const task = todo[i];
    todos.innerHTML += generateToDoHTML(task, i);
  }
};

//When a click on a Task card is done .. opens it as fullscreen and picks the right urgency color for it
function fullScreenTask(x) {
  document.getElementById('fullscreenCon').classList.remove('displayNone');
  let fullscreen = document.getElementById('fullScreenTwo');
  const task = tasks[x]
  fullscreen.innerHTML = '';
  fullscreen.innerHTML += `
  <div id="fullscreen${x}" class="fullscreen">
            <div id="boardConToDoFullScreen">
              <div class="firstRowFullScreen">
                <img src="img/${task['selectedUsers'][0]['picture']}">
                <span class="nameFullScreen"> ${task.selectedUsers[0]['name']}</span>
                <button class="closeBtn" onclick="closeFullScreen()">X</button>
              </div>
              <div class="secondRowFullScreen">
              <span class="titleSpanFullScreen">${task.title}</span>
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

  //urgencycolor checking process !
  let bgColor = document.getElementById('fullscreen' + x);
  let urgencyCol = task['urgency'];

  if (urgencyCol == "High") {
    bgColor.classList.add('urgencyColorRed');
  };
  if (urgencyCol == "Medium") {
    bgColor.classList.add('urgencyColorOrange');
  };
  if (urgencyCol == "Low") {
    bgColor.classList.add('urgencyColorBlue');
  };
};

// function generateToDoHTML(task){
//   return `

//   `
// }





