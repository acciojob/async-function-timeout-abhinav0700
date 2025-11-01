//your JS code here. If required.
// Function to simulate delay using Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main async function triggered on button click
async function showMessage() {
  const textInput = document.getElementById("text");
  const delayInput = document.getElementById("delay");
  const output = document.getElementById("output");

  const message = textInput.value.trim();
  const time = Number(delayInput.value);

  // Clear output before displaying new message
  output.textContent = "";

  if (!message || isNaN(time) || time < 0) {
    output.textContent = "Please enter valid text and delay!";
    return;
  }

  // Wait for the given delay using async/await
  await delay(time);

  // Display the message after delay
  output.textContent = message;
}

// Attach event listener to button
document.getElementById("btn").addEventListener("click", showMessage);
