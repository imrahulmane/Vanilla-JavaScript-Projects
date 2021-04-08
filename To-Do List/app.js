class UI {
  static addToDo(task) {
    const list = document.querySelector("#tasklist");
    const row = document.createElement("tr");

    row.innerHTML = `<td>${task}</td>
        <td><a href="#" class="btn btn-success btn-sm complete">&checkmark;</a></td>
        <td><a href="#" class="btn btn-danger btn-sm delete">&#x2718;</a></td>`;
    list.appendChild(row);
  }

  static clearFields() {
    document.querySelector("#todo").value = "";
  }

  static completeTask(target) {
    if (target.classList.contains("complete")) {
      const task = target.parentNode.previousElementSibling;
      task.style.textDecoration = "line-through";
    }
  }

  static removeTask(target) {
    if (target.classList.contains("delete")) {
      const task = target.parentNode.parentNode;
      task.remove();
    }
  }
}

//Event handlers
document.querySelector("#todoform").addEventListener("submit", (event) => {
  event.preventDefault();
  const todo = document.querySelector("#todo").value;

  if (todo === "") {
    alert("please add something");
  } else {
    UI.addToDo(todo);
    UI.clearFields();
  }
});

document.querySelector("#tasklist").addEventListener("click", (event) => {
  UI.completeTask(event.target);
  UI.removeTask(event.target);
});
