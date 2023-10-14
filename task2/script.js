document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const taskDate = document.getElementById("taskDate");
    const taskPriority = document.getElementById("taskPriority");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // function to add a new task
    function addTask() { 
        const taskText = taskInput.value.trim();
        const dateText = taskDate.value;
        const priorityText = taskPriority.value;

        if (taskText !== "" && dateText !== "") {
            const listItem = document.createElement("li");
            listItem.className = priorityText + "-priority";
            listItem.innerHTML = `
                <span>${taskText}</span>
                <span class="task-date">${dateText}</span>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";
            taskDate.value = "";
        }
    }

    // Event listener for adding a new task
    addTaskButton.addEventListener("click", addTask);

    // Event delegation for deleting tasks
    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-button")) {
            event.target.parentElement.remove();
        }
    });
});
