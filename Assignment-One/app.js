// load JSON string that hold initial members
const initialRoster = JSON.stringify([
    {
        name: "Pikachu", 
        description: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
        type: "Electric",
        weaknesses: "Ground", 
        age: 10, 
        memberImageURL:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
    },
    {
        name: "Charizard", 
        description: "If Charizard becomes truly angered, the flame at the tip of its tail burns in a light blue shade.",
        type: "Fire, Flying",
        weaknesses: "Water, Electric, Rock", 
        age: 8, 
        memberImageURL:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png"
    },
    {
        name: "Espeon", 
        description: "The tip of its forked tail quivers when it is predicting its opponent’s next move.",
        type: "Psychic",
        weaknesses: "Bug, Ghost, Dark", 
        age: 6, 
        memberImageURL:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/196.png"
    },
    {
        name: "Dragapult", 
        description: "Dragapult can make its whole body transparent by clearing its mind and focusing. Even the Dreepy in Dragapult’s horns become invisible.",
        type: "Dragon, Ghost",
        weaknesses: "Ice, Ghost, Dragon, Dark, Fairy", 
        age: 4, 
        memberImageURL:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/887.png"
    },
    {
        name: "Excadrill", 
        description: "Forming a drill with its steel claws and head, it can bore through a steel plate, no matter how thick it is.",
        type: "Ground, Steel",
        weaknesses: "Fire, Water, Fighting, Ground", 
        age: 11, 
        memberImageURL:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/530.png"
    },
])


// Design inspired by ChatGPT and Google Search on May 13 2024
// Website found: https://sun.iwu.edu/~mliffito/cs_codex/posts/javascript-domcontentloaded/
// Prompts used were “Help me get started on adding an event listener in Javascript to the ‘submit’ function of HTML form
// The generated code was adopted: design style of attaching desired functionality to the ‘DOMContentLoaded’ event listener, and adding reset at the end

// ensure DOM/HTML document fully loaded preventing attachment of event listeners to elements not ready yet
document.addEventListener('DOMContentLoaded', function() {

    // load initial members
    const members = JSON.parse(initialRoster);
    members.forEach(member => addMemberToRoster(member));
    

    // load new member upon submitting new registration
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
         // updating some parts of the page dynamically without a full page reload.
        event.preventDefault(); 

        const newMember = {
            name: document.getElementById('memberName').value,
            description: document.getElementById('memberDescription').value,
            type: document.getElementById('memberType').value,
            weaknesses: document.getElementById('memberWeaknesses').value,
            age: document.getElementById('memberAge').value,
            memberImageURL: document.getElementById('memberImageURL').value
        };
        addMemberToRoster(newMember);
        this.reset(); // clear the form after submission
    });
});

// add new member card to roster wihtout full page reload as a SPA
function addMemberToRoster(member) {
    const roster = document.querySelector('.roster-details');
    const rosterCard = document.createElement('li');
    rosterCard.className = 'roster-card';
    
    rosterCard.innerHTML = `
        <img src="${member.memberImageURL}" alt="${member.name}" class="roster-image">
        <div class="roster-card-details">
            <strong>Name:</strong> ${member.name}<br>
            <strong>Description:</strong> ${member.description}<br>
            <strong>Type:</strong> ${member.type}<br>
            <strong>Weaknesses:</strong> ${member.weaknesses}<br>
            <strong>Age:</strong> ${member.age}
        </div>
        <button class="delete-btn" onclick="this.parentNode.remove()">Delete</button>
    `;
    roster.appendChild(rosterCard);
}

function deleteRoster() {
    const rosterList = document.querySelector('.roster-details');
    rosterList.innerHTML = ''; // clear all entries
}