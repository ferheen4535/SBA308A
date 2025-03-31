export const spellSelect = document.getElementById("spellSelect");
export const spellInfo = document.getElementById("spellInfo");

// Initial load: populate dropdown with all spells
export async function initialLoad() {
  try {
    const response = await fetch("https://hp-api.onrender.com/api/spells");
    const data = await response.json();
    console.log("Spells Data:", data);

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Select a Spell --";
    spellSelect.appendChild(defaultOption);

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

export async function handleSpellSelection() {
  const selectedSpell = spellSelect.value;
  if (!selectedSpell) {
    spellInfo.innerHTML = "";
    return;
  }

  try {
    const response = await fetch("https://hp-api.onrender.com/api/spells");
    const data = await response.json();
    const spell = data.find((s) => s.name === selectedSpell);

    spellInfo.innerHTML = spell
      ? `<h1>${spell.name}</h1>${spell.description || "No description available."}`
      : "Spell not found.";
  } catch (error) {
    console.error("Error fetching spell info:", error);
    spellInfo.innerHTML = "Failed to load spell info.";
  }
}