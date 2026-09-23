/*! Copyright © 2026 Tiffany Schuman. 
Licensed under the Blackkat Proprietary License. 
See LICENSE for details */ 

document.getElementById("check-btn").addEventListener("click", () => {
  const userInput = document.getElementById("user-input").value;
  const results = document.getElementById("results-div");

  if (!userInput) {
    alert("Please provide a phone number");
    return;
    } 

  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-])?\d{3}([\s-])?\d{4}$/;
  if (phoneRegex.test(userInput)) {
    results.innerHTML += `<span class="valid">Valid US Number:</span> ${userInput}<br>`;
  } else {
    results.innerHTML += `<span class="invalid">Invalid US Number:</span> ${userInput}<br>`;
  }
});

document.getElementById("clear-btn").addEventListener("click", () => {
  const results = document.getElementById("results-div");

  if (results.innerHTML) {
    results.innerHTML = "";
  }
});
