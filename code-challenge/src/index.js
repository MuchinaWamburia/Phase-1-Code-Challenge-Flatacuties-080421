// // Your code here
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});
// updating url to enable user view characters
const base_url = "http://localhost:3000/characters";
const characterBar = document.getElementById("character-bar");
const characterName = document.getElementById("name");
const characterImage = document.getElementById("image");
const characterVoteCount = document.getElementById("vote-count");
const characterVoteForm = document.getElementById("votes-form");

//accessing characters
function fetchData() {
  fetch(base_url)
    .then((response) => response.json())
    .then((data) => {
      renderCharacters(data);
        });
}

//Displaying characters on the page 
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
//votes
characterVoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newVotes = parseInt(event.target.votes.value);
  const characterVoteCount = document.getElementById("vote-count");
  let current = parseInt(characterVoteCount.textContent);
  let votecount = (current += newVotes);
  characterVoteCount.innerText = votecount;
    
  let updateVotes = {
    votes: votecount,
  };

 });

const resetButton = document.querySelector('#reset-btn')
resetButton.addEventListener('click', (event) => {


 // patch:allows partial updates for HTTP APIs in a standards compliant way.
 //application/json: Indicates that the request body format is JSON
 //stringify:converts a JavaScript value to a JSON string,
  fetch(base_url)
  .then(response => response.json())
  .then(characters => {
      //const charName = document.querySelector('#name')
      const charID = characters.find(character => character.name === characterName.textContent)
      fetch(`${base_url}/${charID.id}`, {
          method: 'PATCH',
          headers: {
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
              votes : '0'
          })
      })
      .then(response => response.json())
      .then(data => characterVotes.textContent = data.votes)
      .then((json) => console.log(json));
  })
})