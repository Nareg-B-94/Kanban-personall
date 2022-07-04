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
        <div id="container1" class="container1 urgencyColorBlue">
                <div class="avatarBkLg dFlexJcAc">${task[i]['selectedUsers'][0]['picture']}</div>
                <div class="infoBkLg">
                  <div class="nameBkLg boldFonts">${task[i]['selectedUsers'][0]['name']}</div>
                <div class="emailBkLg">${task[i]['selectedUsers'][0]['email']}</div>
                </div>
              </div>
              <div id="container2" class="container2 boldFonts">${task[i]['category']}</div>
              <div id="container3" class="container3 boldFonts">${task[i]['description']}</div>
            </div>
        `;

        let bgColor = document.getElementById('container1' + i);
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

/* <div  class="createdTask2">

              <div id="container1" class="container1">
                <div class="avatarBkLg">${task['selectedUsers'][0]['picture']}</div>
                <div class="infoBkLg">
                  <div class="nameBkLg boldFonts">${task['selectedUsers'][0]['name']}</div>
                <div class="emailBkLg">${task['selectedUsers'][0]['email']}</div>
                <div class="createdAt">${task['createdAt']}</div>
                </div>
                </div>

              <div id="container2" class="container2 boldFonts">${task['category']}</div>
              <div id="container3" class="container3 boldFonts">${task['description']}</div>
            </div >
            </div > */