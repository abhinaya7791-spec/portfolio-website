document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (!form) {

        console.log("Form not found");
        return;
    }

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const data = {

            name: document.getElementById("name").value,

            email: document.getElementById("email").value,

            message: document.getElementById("message").value
        };

        try {

            const response = await fetch("http://localhost:5000/contact", {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)
            });

            const result = await response.text();

            alert(result);

        } catch (error) {

            console.log(error);

            alert("Error sending message");
        }
    });
});


const projects = [
    {
        name: "E-Commerce Website",
        description: "An online shopping website.",
        link: "https://github.com/abhinaya7791-spec/ecommerce-app1"
    },
    {
        name: "MERN Blog Platform",
        description: "A blog platform built using MERN stack.",
        link: "https://github.com/abhinaya7791-spec/mern-blog-platform"
    },
    {
        name: "Task Manager",
        description: "An application to organize and manage daily tasks.",
        link: "https://github.com/abhinaya7791-spec/task-manager"
    },
    {
        name: "FitBuddy",
        description: "A fitness application designed to support fitness activities.",
        link: "https://github.com/abhinaya7791-spec/FitBuddy"
    }
];

const projectsContainer = document.getElementById("projects");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" rel="noopener noreferrer">
            View Project on GitHub →
        </a>
    `;

    projectsContainer.appendChild(card);
});
