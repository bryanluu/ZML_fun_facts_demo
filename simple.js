function select(character) {
    // get the selected character's details and button, as well as the old details and button
    let details = document.getElementById(character + "-details");
    let button = document.getElementById(character + "-button");

    // toggle the character's details visibility and selection status
    details.classList.toggle("invisible");
    button.classList.toggle("selected");
}