let clubs = [];

async function loadClubs() {
    try {
        const response = await fetch('footballers.json');  
        const data = await response.json();
        clubs = data.clubs;  
        displayClubs(clubs); 
    } catch (error) {
        console.error('Error loading JSON data:', error);
    }
}

function displayClubs(clubsData) {
    const container = document.getElementById('clubs-container');
    container.innerHTML = '';

    clubsData.forEach(club => {
        const clubCard = document.createElement('div');
        clubCard.className = 'card';
        clubCard.innerHTML = `
            <h3>${club.name}</h3>
            <p>Code: ${club.code}</p>
            <p>Country: ${club.country}</p>
            <p>Goals: ${club.goals}</p>
        `;
        container.appendChild(clubCard);
    });
}

function sortByName() {
    const sortedClubs = [...clubs].sort((a, b) => a.name.localeCompare(b.name));
    displayClubs(sortedClubs);
}

function sortByGoals() {
    const sortedClubs = [...clubs].sort((a, b) => b.goals - a.goals);
    displayClubs(sortedClubs);
}

