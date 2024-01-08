const resultsBoxEl = document.querySelector('.resultsBox');

const strongBtnEl = document.querySelector('#strongBtn');
const weakBtnEl = document.querySelector('#weakBtn');
const textEl = document.querySelector('#text');
const imagesEl = document.querySelector('#images');
const selectBoxEl = document.querySelector('#selectBox');

strongBtnEl.addEventListener('click', () => {
  strongAgainst();
});

weakBtnEl.addEventListener('click', () => {
  weakAgainst();
});

// Array of all types
const types = ['fire', 'water', 'grass'];

// Creates a paragraph element and sets the text content equal to param "text" and text color equal to param "color".
// Returns the created paragraph to be accessed outside function.
const createParagraph = (text, color) => {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = text;
  paragraph.style.color = color;
  return paragraph;
};

// Creates and appends 2 images of types that a specific type is strong and weak against.
const attachImages = (imageOnePath, imageTwoPath) => {
  let imageOne = document.createElement('img');
  // classList is added for styling purposes.
  imageOne.classList.add('typeImages');
  imageOne.src = imageOnePath;
  // Inline-block styled so that they are on the same line.
  imageOne.style.display = 'inline-block';
  imageOne.style.height = '50px';
  imageOne.style.width = '50px';

  let imageTwo = document.createElement('img');
  imageTwo.classList.add('typeImages');
  imageTwo.src = imageTwoPath;
  imageTwo.style.display = 'inline-block';
  imageTwo.style.height = '50px';
  imageTwo.style.width = '50px';

  let results = document.querySelector('.resultsBox');
  results.appendChild(imageOne);
  results.appendChild(imageTwo);
};

//
const strongAgainst = () => {
  // Gets value of selected option from dropdown menu.
  let lowerResult = selectBoxEl.value;

  // Gets rid of all text and images inside resultsBox div.
  resultsBoxEl.innerHTML = '';

  // Still have to create new variable for text/color since they aren't defined in this function yet.
  let text;
  let color = 'green';

  if (lowerResult === 'grass') {
    // Text shows up below images, because they are appended after since the attachImages() function runs inside the if statement.
    text = 'Grass is strong against Water.';
    attachImages(
      './assets/images/grass_type_symbol.png',
      './assets/images/water_type_symbol.png'
    );
  } else if (lowerResult === 'fire') {
    text = 'Fire is strong against Grass.';
    attachImages(
      './assets/images/fire_type_symbol.png',
      './assets/images/grass_type_symbol.png'
    );
  } else if (lowerResult === 'water') {
    text = 'Water is strong against Fire.';
    attachImages(
      './assets/images/water_type_symbol.png',
      './assets/images/fire_type_symbol.png'
    );
  } else if (lowerResult !== types) {
    text = 'Please choose an existing type.';
    color = 'red';
    // If type from the list isnt chosen, message is set to timeout in 3 seconds and be removed.
    setTimeout(() => {
      resultsBoxEl.innerHTML = '';
    }, 3000);
  }

  // Create new variable that uses the createdParagraph() function to display the text/color related to searched word.
  // Has to run after if statements since text isn't defined yet.
  const textBox = createParagraph(text, color);

  // Sets the div to no text, and then appends the text.
  resultsBoxEl.appendChild(textBox);
};

const weakAgainst = () => {
  let lowerResult = selectBoxEl.value;

  resultsBoxEl.innerHTML = '';

  let text;
  let color = 'red';

  if (lowerResult === 'grass') {
    text = 'Grass is weak to Fire.';
    attachImages(
      './assets/images/fire_type_symbol.png',
      './assets/images/grass_type_symbol.png'
    );
  } else if (lowerResult === 'fire') {
    text = 'Fire is weak to Water.';
    attachImages(
      './assets/images/water_type_symbol.png',
      './assets/images/fire_type_symbol.png'
    );
  } else if (lowerResult === 'water') {
    text = 'Water is weak to Grass.';
    attachImages(
      './assets/images/grass_type_symbol.png',
      './assets/images/water_type_symbol.png'
    );
  } else if (lowerResult !== types) {
    text = 'Please choose an existing type.';
    setTimeout(() => {
      resultsBoxEl.innerHTML = '';
    }, 3000);
  }

  const textBox = createParagraph(text, color);

  resultsBoxEl.appendChild(textBox);
};
