// Get all the anchor tags inside the list items
const listItems = document.querySelectorAll("li a");

// Add a click event listener to each anchor tag
listItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default behavior of anchor tag

    // Get the text content of the clicked anchor tag
    const action = event.target.textContent;

    // Show an alert with the action text
    alert(`Performing action: ${action}`);
  });
});

// Get the "Prev" and "Next" anchor tags
const prevLink = document.querySelector("div a:first-child");
const nextLink = document.querySelector("div a:last-child");

// Add a click event listener to the "Prev" anchor tag
prevLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default behavior of anchor tag

  // Show an alert with the "Prev" text
  alert("Going to previous page");
});

// Add a click event listener to the "Next" anchor tag
nextLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default behavior of anchor tag

  // Show an alert with the "Next" text
  alert("Going to next page");
});
