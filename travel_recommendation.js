document.addEventListener("DOMContentLoaded", () => {
  // Fetch travel recommendations
  fetch("travel_recommendation_api.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data fetched successfully:", data);
      displayRecommendations(data);
    })
    .catch((error) => {
      console.error("Failed to fetch data:", error);
    });
});

// Function to display recommendations on the page
function displayRecommendations(recommendations) {
  const container = document.getElementById("recommendation-container");

  if (!recommendations || recommendations.length === 0) {
    container.innerHTML = "<p>No recommendations available.</p>";
    return;
  }

  recommendations.forEach((recommendation) => {
    // Create a card for each recommendation
    const card = document.createElement("div");
    card.classList.add("card");

    // Add image
    const img = document.createElement("img");
    img.src = recommendation.imageUrl;
    img.alt = recommendation.name;
    card.appendChild(img);

    // Add place name
    const name = document.createElement("h3");
    name.textContent = recommendation.name;
    card.appendChild(name);

    // Add description
    const description = document.createElement("p");
    description.textContent = recommendation.description;
    card.appendChild(description);
 
    container.appendChild(card);
  });
}
