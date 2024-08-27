document.addEventListener('DOMContentLoaded', function() {
    const teamsList = document.getElementById('teams-list');
    
    // Example static list of teams
    const teams = [
        'Arsenal',
        'Chelsea',
        'Manchester City',
        'Liverpool',
        'Tottenham Hotspur'
    ];

    // Display the list of teams
    teamsList.innerHTML = `<ul>${teams.map(team => `<li>${team}</li>`).join('')}</ul>`;
});
