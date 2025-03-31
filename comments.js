export async function submitComment() {
    const characterName = document.getElementById("characterName").value.trim();
    const commentText = document.getElementById("commentText").value.trim();
    const commentStatus = document.getElementById("commentStatus");
  
    if (!characterName || !commentText) {
      commentStatus.textContent = "Please enter both character name and comment.";
      commentStatus.style.color = "white";
      return;
    }
  
    const commentData = { character: characterName, comment: commentText };
  
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments", {
        method: "POST",
        body: JSON.stringify(commentData),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        const result = await response.json();
        commentStatus.textContent = "Comment submitted successfully!";
        commentStatus.style.color = "green";
        console.log("Server Response:", result);
      } else {
        commentStatus.textContent = "Failed to submit comment.";
        commentStatus.style.color = "white";
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      commentStatus.textContent = "An error occurred.";
    }
  }