const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    const buttonId = this.id;  // Get the button's ID
    const linkedPage = buttonId.slice(6) + ".html";  // Extract linked page name (assuming ID format is button + number)
    window.location.href = linkedPage;  // Redirect to linked page on click
  });
});

// Add JavaScript code for dark mode functionality here
