// script.js

// Smooth scroll effect for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark/Light mode toggle
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "Toggle Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
// CSS for dark mode
const style = document.createElement('style');
style.innerHTML = `
    body.dark-mode {
        background-color: #121212;
        color: #ffffff;
    }
    .header {
        background: linear-gradient(to right, #4a90e2, #9013fe);
    }
    .certificates {
        background: #1e1e1e;
    }
    .certificate {
        background: #2a2a2a;
    }
`;
document.head.appendChild(style);