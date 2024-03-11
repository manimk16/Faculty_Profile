const listItems = document.querySelectorAll(".main-menu li");

listItems.forEach((listItem) => {
  listItem.addEventListener("click", () => {
    listItems.forEach((otherItem) => {
      otherItem.classList.remove('active')
    })
    listItem.classList.add('active')
  });
});

// Get the button element
const button = document.createElement("button");
button.type = "button";
button.textContent = "See full profile....!!";

// Add a click event listener to the button
button.addEventListener("click", () => {
  // Replace `https://www.example.com/full-profile` with the actual URL of the page you want to open
  const url = "https://www.example.com/full-profile";

  // Open the URL in a new tab
  window.open(url, "_blank");
});

// Append the button to the desired location in the HTML document
// For example, you can append it to a <div> with class "main-menu":
const mainMenu = document.querySelector(".main-menu");
mainMenu.appendChild(button);