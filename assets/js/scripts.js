//var buttonEl = document.querySelector("#save-task");
var formE1 = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskIdCounter = 0;
var pageContentEl = document.querySelector("#page-content");

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // Package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    // check if input values are empty strings
        if (!taskNameInput || !taskTypeInput) {
            alert("You need to fill out the task form!");
            return false;
          }

          formE1.reset();
    // Send it an argument to createTaskE1
    createTaskE1(taskDataObj);
    
};

var createTaskE1 = function(taskDataObj) 
// taskDataObj
{

// creat list item
var listItemEl = document.createElement("li");
listItemEl.className = "task-item";
// Add task id as a custom attribute
listItemEl.setAttribute("data-task-id", taskIdCounter);
//creat div to hold task info and add to list item
var taskInfoE1 = document.createElement("div");
taskInfoE1.className = "task-info";
// Add HTML content to div
taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
listItemEl.appendChild(taskInfoE1);

// Create Task Actions
var taskActionsEl = createTaskActions(taskIdCounter);
listItemEl.appendChild(taskActionsEl);

// Add entire list item to the list
tasksToDoEl.appendChild(listItemEl);
// Increase task counter for next unique id
taskIdCounter++;
};

var createTaskActions = function(taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerE1.className = "task-actions";
    // Create edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    // create delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);
    // Dropdown Menu
    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);
    // For loop Option Elements
    var statusChoices = ["To Do", "In Progress", "Completed"];

    for (var i = 0; i < statusChoices.length; i++) {
        // Create option element
        var statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value", statusChoices[i]);

        // Append to select
        statusSelectEl.appendChild(statusOption);
    }
    actionContainerEl.appendChild(statusSelectEl);
    return actionContainerEl;
};
//buttonEl.addEventListener("click", createTaskHandler); 
formE1.addEventListener("submit", taskFormHandler);
    var taskButtonHandler = function(event) {
        console.log(event.target);

        if (event.target.matches(".delete.btn")) {
            // Get the element's task id
            var taskId = event.target.getAttribute("data-task-id");
            console.log(taskId);
        }
        var deleteTask = function(taskId) {
            var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
            taskSelected.remove();
        }
        
    };
pageContentEl.addEventListener("click", taskButtonHandler);
