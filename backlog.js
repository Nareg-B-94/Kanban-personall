async function initBacklog(){
    await init();
    addBackLog();
}


function addBackLog() {
    let backlog = document.getElementById('BACKLOG');
    backlog.innerHTML = ``;
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        backlog.innerHTML +=`
<div id="firstContainer${i}" class="medzCon">
                <div  class="container-fluid arachinCon avatarBkLg"><img src="img/${task['selectedUsers'][0] ['picture']}">  &nbsp; ${task['selectedUsers'][0]['name']} <br> ${task['selectedUsers'][0]['email']}  </div>
                <div class="container-fluid yegrortCon">${task['category']} <br> ${task['createdAt']} </div>
                <div class="container-fluid yerortCon">${task['description']}</div>
              </div>
        `;

        let bgColor = document.getElementById('firstContainer' + i);
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
    }
}

