
const spellSelect = document.getElementById("spellSelect");
const spellInfo = document.getElementById("spellInfo");
const progressBar = document.getElementById("progressBar");

// Initial load: populate dropdown with all spells
async function initialLoad() {
  try {
    const response = await fetch("https://hp-api.onrender.com/api/spells");
    const data = await response.json();
    console.log("Spells Data:", data);

    data.forEach((spell) => {
      const option = document.createElement("option");
      option.value = spell.name;
      option.textContent = spell.name;
      spellSelect.appendChild(option);
    });

    console.log("Spells loaded successfully!");
  } catch (error) {
    console.error("Error loading spells:", error);
  }
}

initialLoad();



//source: https://www.youtube.com/watch?v=5QlE6o-iYcE//