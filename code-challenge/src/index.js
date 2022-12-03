// Your code here
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});
const characterBar = document.getElementById("character-bar");
const characterName = document.getElementById("name");
const characterImage = document.getElementById("image");
const characterVoteCount = document.getElementById("vote-count");
const characterVoteForm = document.getElementById("votes-form");

//Fetch data funtion
function fetchData() {
  fetch("http://localhost:3000/characters")
    .then((resp) => resp.json())
    .then((data) => {
      renderCharacters(data);
      //updateVotes(data);
    });
}

//Function to render the characters 
function renderCharacters(data) {
  data.forEach((data) => {
    const nameSpan = document.createElement("span");
    nameSpan.innerText = data.name;

    characterBar.appendChild(nameSpan);
    nameSpan.addEventListener("click", () => {
      characterName.textContent = data.name;
      characterImage.setAttribute("src", data.image);
      characterVoteCount.textContent = data.votes;
    });
  });
}


