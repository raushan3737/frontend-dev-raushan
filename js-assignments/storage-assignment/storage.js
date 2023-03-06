/*
Problem Statement: 
Create a simple application which displays two counts:Local Score, Session Score and a button to increment these counts. Local score must persist in Local Storage and Session score must persist in Session Storage and must reset on closing the session.\
Submit the github link with your code

*/

// Accessing the button
const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");

// Set the text of HTML according to the local & session storage we have. And storing in variable to increment
let localText = (document.getElementById("localScoreTxt").textContent =
  localStorage.getItem("localScoreTxt"));

let sessionText = (document.getElementById("sessionScoreTxt").textContent =
  sessionStorage.getItem("sessionScoreTxt"));

// Incrementing the storage
incBtn.addEventListener("click", () => {
  // Incrementing by 1
  localText++;
  sessionText++;

  // Set the incremented value in storage
  localStorage.setItem("localScoreTxt", localText);
  sessionStorage.setItem("sessionScoreTxt", sessionText);

  // Set the text of HTML according to the incremented value.
  document.getElementById("localScoreTxt").textContent = localText;
  document.getElementById("sessionScoreTxt").textContent = sessionText;
});

// Decrementing the storage
decBtn.addEventListener("click", () => {
  // If local & session score exist then, Decrement by 1 because, Negative score doesn't sense
  if (localText) {
    localText--;
  }
  if (sessionText) {
    sessionText--;
  }

  // Set the decremented value in storage
  localStorage.setItem("localScoreTxt", localText);
  sessionStorage.setItem("sessionScoreTxt", sessionText);

  // Set the text of HTML according to the decremented value.
  document.getElementById("localScoreTxt").textContent = localText;
  document.getElementById("sessionScoreTxt").textContent = sessionText;
});

// Reset the storage
resetBtn.addEventListener("click", () => {
  localText = 0;
  sessionText = 0;
  localStorage.setItem("localScoreTxt", localText);
  sessionStorage.setItem("sessionScoreTxt", sessionText);
  document.getElementById("localScoreTxt").textContent = localText;
  document.getElementById("sessionScoreTxt").textContent = sessionText;
});
