let previousCharacter = null; // stores the previous character selection

function select(character) {
    // get the selected character's details and button, as well as the old details and button
    let details = document.getElementById(character + "-details");
    let button = document.getElementById(character + "-button");
    let oldDetails = document.getElementById(previousCharacter + "-details");
    let oldButton = document.getElementById(previousCharacter + "-button");

    if (previousCharacter !== null) {
        // set the old details to invisible and the old button's selected status
        oldDetails.classList.add("invisible");
        oldButton.classList.remove("selected");
    }

    if (character === previousCharacter) // if we selected the same character
    {
        previousCharacter = null;
    } else { // we selected the new character
        // make the character's details visible and select its button
        details.classList.remove("invisible");
        button.classList.add("selected");
        previousCharacter = character;
    }

    // update old data
    oldDetails = details;
    oldButton = button;
}