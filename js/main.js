document.addEventListener("DOMContentLoaded", function() {
    // Simple scroll animation for the navbar
    window.addEventListener("scroll", function() {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.style.background = "#555";
        } else {
            navbar.style.background = "#333";
        }
    });
});
// ... Previous JS ...

// Dummy search functionality (replace with actual search logic)
document.querySelector("#search-btn").addEventListener("click", function() {
    let query = document.querySelector("#search-input").value;
    if(query) {
        alert(`Searching for startups related to "${query}"...`); 
        // Replace with an actual search call
    }
});
