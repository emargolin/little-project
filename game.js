var currentState = 1;

var personalityCount = {
    "Golden Gate Bridge": 0,
    "Sutro Tower": 0,
    "Painted Ladies": 0,
    "Salesforce Tower": 0,
    "Dolores Park": 0
    // etc, add more
}

function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

function renderState(state) { 
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

    // Get image from gameData given state

    // Load image

    // Show image, text, and choices
}

function changeState(newState, selectedPersonalities) { 
    // Add up values from selectedPersonalities
    
    currentState = newState;
    
    if (newState == 0) {
        showPersonalityResult();
    } else {
        renderState(currentState);
    }
}

function showPersonalityResult() {
    // Find highest value in personalityCount

    // Present image
}

window.onload = () => {
    renderState(currentState);
}