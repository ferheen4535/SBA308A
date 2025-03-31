export async function getRandomCharacter() {
    const url = "https://hp-api.onrender.com/api/characters";
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data.slice(0, 10); // Limit to 10 images
    } catch (error) {
      console.error(error);
    }
  }
  
  export async function renderCharacterSlideshow() {
    const characterContainer = document.getElementById("characterContainer");
    const characters = await getRandomCharacter();
    if (!characters || characters.length === 0) return;
  
    let currentIndex = 0;
    const imgElement = new Image();
    imgElement.width = 200;
    imgElement.height = 200;
    characterContainer.appendChild(imgElement);
  
    function showNextCharacter() {
      const character = characters[currentIndex];
      imgElement.src = character.image || "fallback.jpg";
      imgElement.alt = character.name;
      currentIndex = (currentIndex + 1) % characters.length;
    }
  
    showNextCharacter();
    setInterval(showNextCharacter, 3000); // Change image every 3 seconds
  }