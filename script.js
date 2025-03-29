const spellSelect = document.getElementById("spellSelect");
const spellInfo = document.getElementById("spellInfo");
const progressBar = document.getElementById("progressBar");

// Initial load: populate dropdown with all spells
async function initialLoad() {
  try {
    const response = await fetch("https://hp-api.onrender.com/api/spells");
    const data = await response.json();
    console.log("Spells Data:", data);

    // Add default option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Select a Spell --";
    spellSelect.appendChild(defaultOption);

    // Add each spell to dropdown
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

// When a spell is selected
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
      spellInfo.innerHTML = `Spell not found.`;
      return;
    }


    spellInfo.innerHTML = `
     <h1> ${spell.name}</h1>
      ${spell.description || "No description available."}
    `;
  } catch (error) {
    console.error("Error fetching spell info:", error);
    spellInfo.innerHTML = `Failed to load spell info.`;
  }
});

////////////////////////////////

async function getRandomCharacter() {
  const url = "https://hp-api.onrender.com/api/characters";
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Render character images as a slideshow
async function getRandomCharacter() {
  const url = "https://hp-api.onrender.com/api/characters";
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.slice(0, 10); // Use only the first 10 images
  } catch (error) {
    console.error(error);
  }
}

// Render character images as a slideshow
async function renderCharacterSlideshow() {
  const characterContainer = document.getElementById("characterContainer");
  const characters = await getRandomCharacter();
  if (!characters || characters.length === 0) return;

  let currentIndex = 0;

  const imgElement = new Image();
  imgElement.width = 620;
  imgElement.height = 320;
  characterContainer.appendChild(imgElement);

  function showNextCharacter() {
    const character = characters[currentIndex];
    imgElement.src = character.image || 'fallback.jpg';
    imgElement.alt = character.name;

    currentIndex = (currentIndex + 1) % characters.length;
  }

  // Initial display and set interval for slideshow///
  showNextCharacter();
  setInterval(showNextCharacter, 3000); // Change image every 3 seconds
}

// Call the function to display character slideshow//
renderCharacterSlideshow();

///https://youtu.be/uof_zYxtnp0?si=Qy5cwnQ569hGHBMP//adding music//






///cursor///
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
////////////////////////////////////////////

//debugged///




















//source: https://www.youtube.com/watch?v=5QlE6o-iYcE//

//https://youtu.be/7eE8xPyXSR4?si=7FqWARnZahE3yyun// cursor code//