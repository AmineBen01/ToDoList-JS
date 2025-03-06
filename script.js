var task = "";

// Add click event listener
document.getElementById("add").addEventListener("click", addTask);

// Add keypress event listener for the Enter key
document.getElementById("input").addEventListener("keypress", function(event) {
    // Check if the key pressed was Enter (key code 13)
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    // Extract the text from input
    const task = document.getElementById("input").value;
    // Erase it
    document.getElementById("input").value = "";
    if (task == "") {
        return;
    } else {
        createTask(task);
    }
}

let taskCounter = 0;

function createTask(task) {
    taskCounter++;
    const uniqueId = `cbx-${taskCounter}`;

    // We form the div that will contain a full task (checkbox + text)
    var taskDiv = document.createElement("div");
    taskDiv.classList.add("flex", "justify-start", "items-center", "space-x-2");

    // We form the div for the checkbox
    var div = document.createElement("div");
    div.classList.add("cntr");

    var input = document.createElement("input");
    input.type = "checkbox";
    input.id = uniqueId;
    input.classList.add("hidden-xs-up", "task-cbx");
    input.checked = false;

    var label = document.createElement("label");
    label.classList.add("cbx");
    label.setAttribute("for", uniqueId); // Associates label with checkbox

    // We form the p element for the task text
    var taskText = document.createElement("p");
    taskText.classList.add("font-semibold");
    taskText.innerText = task;

    div.appendChild(input);
    div.appendChild(label);

    // We put everything in the div that contain the full task
    taskDiv.appendChild(div);
    taskDiv.appendChild(taskText);

    document.getElementById("tasks").appendChild(taskDiv);
}