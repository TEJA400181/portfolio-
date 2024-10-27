// Greeting Function
function setGreeting() {
    const greetingMessage = document.getElementById("greeting-message");
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        greetingMessage.innerText = "Good Morning!";
    } else {
        greetingMessage.innerText = "Good Afternoon!";
    }
}

// Redirect to Portfolio Page
function redirectToPortfolio() {
    window.location.href = "portfolio.html"; // Change to the path of your portfolio page
}

// Toggle Skills Function
function toggleSkills() {
    const skillCards = document.getElementById("skill-cards");
    skillCards.classList.toggle("hidden");
}

// Initialize Greeting on Page Load
document.addEventListener("DOMContentLoaded", () => {
    setGreeting();
});

