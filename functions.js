document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/assignments')
        .then(response => response.json())
        .then(assignments => {
            const assignmentList = document.getElementById('assignment-list');
            assignments.forEach(assignment => {
                const assignmentDiv = document.createElement('div');
                assignmentDiv.className = 'assignment';
                assignmentDiv.innerHTML = `
                    <h2>${assignment.title}</h2>
                    <p>${assignment.description}</p>
                    <p>Due Date: ${new Date(assignment.dueDate).toLocaleDateString()}</p>
                `;
                assignmentList.appendChild(assignmentDiv);
            });
        });
});

// Select all checkboxes and text divs
let checkboxes = document.querySelectorAll(".task-checkbox");
let texts = document.querySelectorAll(".assis");

// Add event listener to all checkboxes
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
        // Check if the checkbox is checked
        if (checkbox.checked) {
            texts[index].style.textDecoration = "line-through";
        } else {
            texts[index].style.textDecoration = "none";
        }
    });
});

