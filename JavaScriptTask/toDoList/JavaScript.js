window.onload = render;

function render() {
  if (localStorage.getItem("list") == null) return;

  // Get the tasks from localStorage and convert it to an array
  let list = Array.from(JSON.parse(localStorage.getItem("list")));

  list.forEach((element) => {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    if (element.completed) li.classList.add("completed");
    li.innerHTML = `<div class="task">${element.task} <br>${element.assignee}</div>
  <div class="buttons" >
    <div class="delete" ><i class="fa-solid fa-trash"  onclick="clickDelete(this)"></i>
    </div>
    <div class="done"  ><i   class="fa-regular fa-circle-check"  onclick="taskComplete(this)"></i></div>
  </div>`;
    ul.append(li);
  });
  renderFooter();
}

function addTask() {
  const task = document.querySelector("#task");
  const assignee = document.querySelector("#assignee");
  if (task.value == "") {
    alert("write some task");
    return false;
  }
  localStorage.setItem(
    "list",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("list") || "[]"),
      { task: task.value, assignee: assignee.value, completed: false },
    ])
  );

  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerHTML = `<div class="task">${task.value} <br>${assignee.value}</div>
  <div class="buttons"  >
    <div class="delete" ><i class="fa-solid fa-trash"  onclick ="clickDelete(this)"></i>

    </div>
    <div class="done"><i class="fa-regular fa-circle-check"  onclick="taskComplete(this)"></i></div>
  </div>`;
  ul.append(li);
  renderFooter();
  task.value = "";
  task.focus();
  assignee.value = "";
}

function clickDelete(event) {
  if (event.parentNode.classList.contains("delete")) {
    document.querySelector("#confirm").removeAttribute("hidden");
    const li = event.parentNode.parentNode.parentNode;
    li.classList.add("deletedToDo");
  }
}

function taskComplete(event) {
  if (event.parentNode.classList.contains("done")) {
    const li = event.parentNode.parentNode.parentNode;
    li.classList.toggle("completed");
    const key = li.firstChild.textContent.split(" ")[0];
    let list = Array.from(JSON.parse(localStorage.getItem("list")));
    list.forEach((task) => {
      if (task.task == key) {
        task.completed =  !task.completed;
      }
    });
    localStorage.setItem("list", JSON.stringify(list));
    renderFooter();
  }
}

function deleteTask() {
  const ul = document.querySelector("ul");
  const deletedLi = document.querySelector(".deletedToDo");
  const key = deletedLi.firstChild.textContent.split(" ")[0];
  let list = Array.from(JSON.parse(localStorage.getItem("list")));
  list.forEach((task) => {
    if (task.task === key) {
      list.splice(list.indexOf(task), 1);
    }
  });
  localStorage.setItem("list", JSON.stringify(list));
  ul.removeChild(deletedLi);
  document.querySelector("#confirm").setAttribute("hidden", true);
  renderFooter();
}

document.getElementById("confirmDelete").addEventListener("click", deleteTask);
document.getElementById("cancel").addEventListener("click", () => {
  document.querySelector("#confirm").setAttribute("hidden", true);
});

function searchForTask() {
  const target = document.querySelector("#search");

  if (localStorage.getItem("list") == null) return;

  const list = Array.from(JSON.parse(localStorage.getItem("list")));
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  list.forEach((element) => {
    if (element.task.includes(target.value)) {
      const li = document.createElement("li");
      if (element.completed) li.classList.add("completed");
      li.innerHTML = `<div class="task">${element.task} <br>${element.assignee}</div>
    <div class="buttons" >
      <div class="delete" ><i class="fa-solid fa-trash"  onclick="clickDelete(this)"></i>
      </div>
      <div class="done"  ><i   class="fa-regular fa-circle-check"  onclick="taskComplete(this)"></i></div>
    </div>`;
      ul.append(li);
    }
  });
}

function renderFooter(){

    let list = Array.from(JSON.parse(localStorage.getItem("list")));

    document.getElementById("footer").innerHTML = `<span> ToDo: ${
        list.length
      } </span> <span> Done: ${
        list.filter((element) => {
          return element.completed;
        }).length
      } </span>`;
}