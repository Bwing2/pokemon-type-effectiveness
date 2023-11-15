const strongBtnEl = document.querySelector("#strongBtn");
const weakBtnEl = document.querySelector("#weakBtn");
const resultEl = document.querySelector("#result");
const selectBoxEl = document.querySelector("#searchBox");

strongBtnEl.addEventListener("click", () => {
  strongAgainst();
});

weakBtnEl.addEventListener("click", () => {
  weakAgainst();
});

// Array of all types
const types = ["fire", "water", "grass"];

// Creates a paragraph element and sets the text content equal to param "text" and text color equal to param "color"
// Returns the created paragraph to be accessed outside function
const createParagraph = (text, color) => {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = text;
  paragraph.style.color = color;
  return paragraph;
};

const strongAgainst = () => {
  let lowerResult = selectBoxEl.value.toLowerCase();

  // Still have to create new variable for text/color since they aren't defined in this function yet
  let text;
  let color = "green";

  if (lowerResult === "grass") {
    text = "Strong against water.";
  } else if (lowerResult === "fire") {
    text = "Strong against grass.";
  } else if (lowerResult === "water") {
    text = "Strong against fire.";
  } else if (lowerResult !== types) {
    text = "Please choose an existing type.";
    color = "red";
    // If type from the list isnt chosen, message is set to timeout in 3 seconds and be removed
    setTimeout(() => {
      resultEl.appendChild(messageBox).remove();
    }, 3000);
  }

  // Create new variable that uses the createdParagraph() function to display the text/color related to searched word
  const messageBox = createParagraph(text, color);

  // Sets the div to no text, and then appends the message
  resultEl.innerHTML = "";
  resultEl.appendChild(messageBox);
};

const weakAgainst = () => {
  let lowerResult = selectBoxEl.value.toLowerCase();
  let message;
  let color = "red";

  if (lowerResult === "grass") {
    message = "Weak to fire.";
  } else if (lowerResult === "fire") {
    message = "Weak to water.";
  } else if (lowerResult === "water") {
    message = "Weak to grass.";
  } else if (lowerResult !== types) {
    message = "Please choose an existing type.";
    setTimeout(() => {
      resultEl.appendChild(messageBox).remove();
    }, 3000);
  }

  const messageBox = createParagraph(message, color);
  resultEl.innerHTML = "";
  resultEl.appendChild(messageBox);
};
