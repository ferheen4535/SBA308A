
const spellSelect = document.getElementById("spellSelect");
const spellInfo = document.getElementById("spellInfo");
// const progressBar = document.getElementById("progressBar");

// Initial load: populate dropdown with all spells
async function initialLoad() {
  try {
    const response = await fetch("https://hp-api.onrender.com/api/spells"); //github harry potter spells//
    const data = await response.json();
    console.log("Spells Data:", data); //retreive data//

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

initialLoad();   //upload spells in bar//
spellSelect.addEventListener("change", async () => {
    const selectedSpell = spellSelect.value;
  
  
    if (!selectedSpell) {
      spellInfo.innerHTML = "";
      return;
 
    }

    try {
        const response = await fetch("https://hp-api.onrender.com/api/spells");
        const data = await response.json();
        const spell = data.find((s) => s.name === selectedSpell);
    
    
        if (!spell) {
          spellInfo.innerHTML = `<p>Spell not found.</p>`;
          return;
        }
    
        spellInfo.innerHTML = `
        <h2>${spell.name}</h2>
        <p>${spell.description}</p>
      `;
    } catch (error) {
      console.error("Error fetching spell info:", error);
    }
  });
  ////spells out put, debugged///
    


//source: https://www.youtube.com/watch?v=5QlE6o-iYcE//