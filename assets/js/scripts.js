//var buttonEl = document.querySelector("#save-task");
var formE1 = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // creat list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    //creat div to hold task info and add to list item
    var taskInfoE1 = document.createElement("div");
    taskInfoE1.className = "task-info";
    // Add HTML content to div
    taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskNameInpt + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemE1.appendChild(taskInfoE1);
    // Add entire list item to the list
    tasksToDoEl.appendChild(listItemEl);
    
};

//buttonEl.addEventListener("click", createTaskHandler); 
formE1.addEventListener("submit", createTaskHandler);
