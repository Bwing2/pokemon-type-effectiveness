const strongAgainst = () => {
  let lowerResult = selectBoxEl.value.toLowerCase();

  // Still have to create new variable for text/color since they aren't defined in this function yet
  let text =
    lowerResult === "grass"
      ? "Strong against water."
      : lowerResult === "fire"
      ? "Strong against grass."
      : lowerResult === "water"
      ? "Strong against fire."
      : lowerResult !== types
      ? "Please choose an existing type."
      : ""; // Default value if none of the conditions match

  let color = lowerResult !== types ? "red" : "green";

  // Create new variable that uses the createdParagraph() function to display the text/color related to searched word
  const messageBox = createParagraph(text, color);

  // Sets the div to no text, and then appends the message
  resultEl.innerHTML = "";
  resultEl.appendChild(messageBox);
};
