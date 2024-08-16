document.addEventListener('DOMContentLoaded', () => {
    const loadingDiv = document.getElementById('loading');
    const contentDiv = document.getElementById('content');
    const errorDiv = document.getElementById('error');
    const nameSpan = document.getElementById('name');
    const heightSpan = document.getElementById('height');
    const genderSpan = document.getElementById('gender');
    const eyeColorSpan = document.getElementById('eyecolor');
    const birthYearSpan = document.getElementById('birth-year');
    const homeWorldSpan = document.getElementById('home-world');
    const getCharacterBtn = document.getElementById('get-character');

    getCharacterBtn.addEventListener('click', () => {
        loadingDiv.classList.remove('hidden');
        contentDiv.classList.add('hidden');
        errorDiv.classList.add('hidden');

        getRandomCharacter()
            .then(character => {
                displayCharacter(character);
                loadingDiv.classList.add('hidden');
                contentDiv.classList.remove('hidden');
            })
            .catch(error => {
                console.error(error);
                loadingDiv.classList.add('hidden');
                errorDiv.classList.remove('hidden');
            });
    });

    function getRandomCharacter() {
        const randomCharacterId = Math.floor(Math.random() * 83) + 1;
        const apiUrl = `https://www.swapi.tech/api/people/${randomCharacterId}`;

        return fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => data.result.properties)
            .catch(error => {
                throw new Error(`Failed to fetch character: ${error.message}`);
            });
    }

    function displayCharacter(character) {
        nameSpan.textContent = character.name;
        heightSpan.textContent = character.height;
        genderSpan.textContent = character.gender;
        eyeColorSpan.textContent = character.eye_color;
        birthYearSpan.textContent = character.birth_year;
        homeWorldSpan.textContent = character.homeworld;
    }
});