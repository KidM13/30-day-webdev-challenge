document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addbtn = document.getElementById("addbtn");
    const taskList = document.getElementById("taskList");

    addbtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim(); 
        if (taskText === "") return;

        const li = document.createElement("li");
        li.textContent = taskText;

        // Toggle complete on click
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        // Right-click to delete
        li.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = "";
    });
});