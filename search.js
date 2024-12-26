document.addEventListener("DOMContentLoaded", () => {
  // Keywords and their variations
  const recommendations = {
    beach: ["beach", "beaches"],
    temple: ["temple", "temples"],
    country: ["country", "countries"]
  }; 

  // Search button event listener
  document.getElementById("searchButton").addEventListener("click", () => {
    const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();

    let found = false;
    let resultCategory = "";

    // Match the search input with predefined keywords
    for (const [category, keywords] of Object.entries(recommendations)) {
      if (keywords.includes(searchInput)) {
        found = true;
        resultCategory = category;
        break;
      }
    }

    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = ""; // Clear previous results

    if (found) {
      // Display matching results
      resultContainer.innerHTML = `<p>Showing results for "${resultCategory}"</p>`;
    } else {
      // Display no results message
      resultContainer.innerHTML = `<p>No results found for "${searchInput}"</p>`;
    }
  });

  // Reset button event listener
  document.getElementById("resetButton").addEventListener("click", () => {
    document.getElementById("searchInput").value = "";
    document.getElementById("result-container").innerHTML = "";
  });
});
