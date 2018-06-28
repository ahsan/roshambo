/* This is free and unencumbered software released into the public domain.

    Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

    In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

    For more information, please refer to <http://unlicense.org> */


/**
 * This file has all the controllers for the main view
 */

// Application state object
let state = {
    p1Type: "User",         // can be either 'User' or 'Bot'
    p1Choice: null,         // player 1's choice of object
    gameComplete: false,    // represents if the game is done or ongoing
    p1Score: 0,             // player 1's score up till now
    p2Score: 0              // player 2's score up till now
};

// init a game
resetGame();

/**
 * Resets the state of the application for a new game.
 * Scores are preserved.
 */
function resetGame() {
    // update game status
    state.gameComplete = false;
    state.p1Choice = null;

    // set the message strings
    setMessage("");
    setScoreString();

    // init player 1's pane, preserving the type of player 1
    selectP1Type(state.p1Type); // toggles divs as well

    // init player 2's pane to show question mark
    toggleP2Divs('qmark');
}


/**
 * Handler for player 1 type selection.
 * @param type
 */
function selectP1Type(type) {

    // force to legal user types
    const allowedTypes = ['User', 'Bot'];
    if(allowedTypes.includes(type)) {
        state.p1Type = type;
    } else {
        state.p1Type = 'User';
    }

    // show type on the dropdown menu
    const button = document.querySelector("#dropdownMenuButton");
    button.innerHTML = state.p1Type;

    // based on type, either show buttons (user)
    // or question mark (bot)
    switch (state.p1Type) {
        case 'User':
            toggleP1Divs('buttons');
            break;
        case 'Bot':
            toggleP1Divs('qmark');
            break;
    }
}


/**
 * Handler for player one choice selection
 * @param choice
 */
function selectP1Choice(btn) {
    switch (state.p1Type) {
        case 'User':
            state.p1Choice = btn.innerHTML.trim().toLowerCase();
            break;
        case 'Bot':
            state.p1Choice = getRandom();
            break;
    }
}

/**
 * Handler for go/new game button
 */
function onGoClicked(btn){

    if(state.gameComplete) {
        // 'new game' button was clicked
        resetGame();
        // change to 'go' button
        btn.innerHTML = 'Go!';
        state.gameComplete = false;
    } else {
        // 'go' button was clicked
        if(state.p1Type === 'Bot') {
            state.p1Choice = getRandom();
        } else {
            // p1Type is user
            if(!state.p1Choice) {
                setMessage("Select an object")
                return;
            }
        }
        const playerTwoChoice = getRandom();

        let gameResult = getResult(state.p1Choice, playerTwoChoice);

        if (gameResult == 'win') {
            // player 1 has won
            state.p1Score++;
            setMessage("Player 1 won!");
        } else if (gameResult == 'lose') {
            // player 2 has won
            state.p2Score++;
            setMessage("Player 1 lost!");
        } else {
            // draw
            setMessage("The game drawed");
        }

        setScoreString();

        // show images on both panes
        toggleP1Divs('image');
        toggleP2Divs('image');
        setImages(state.p1Choice, playerTwoChoice);

        // change to 'New Game' button
        btn.innerHTML = 'New Game';
        state.gameComplete = true;
    }
}

/**
 * Sets the message string
 * @param message
 */
function setMessage(message) {
    const messageElem = document.querySelector("#message");
    messageElem.innerHTML = message;
}

/**
 * Sets the score string
 * @param message
 */
function setScoreString() {
    const messageElem = document.querySelector("#score");
    messageElem.innerHTML = state.p1Score + " - " + state.p2Score;
}

/**
 * Toggles the correct div to show on the player 1's pane
 * @param toShow: 'buttons' or 'image' or 'qmark'
 */
function toggleP1Divs(toShow) {

    const btnsDiv = document.querySelector("#player1-btns");
    const imageDiv = document.querySelector("#player1-img-div");
    const qMarkDiv = document.querySelector("#player1-qmark");

    switch (toShow) {
        case 'buttons':
            btnsDiv.style.display = 'flex';
            imageDiv.style.display = 'none';
            qMarkDiv.style.display = 'none';
            break;
        case 'image':
            btnsDiv.style.display = 'none';
            imageDiv.style.display = 'flex';
            qMarkDiv.style.display = 'none';
            break;
        case 'qmark':
            btnsDiv.style.display = 'none';
            imageDiv.style.display = 'none';
            qMarkDiv.style.display = 'flex';
            break;
    }
}

/**
 * Toggles the correct div to show on the player 2's pane
 * @param toShow: 'image' or 'qmark'
 */
function toggleP2Divs(toShow) {

    const imageDiv = document.querySelector("#player2-img-div");
    const qMarkDiv = document.querySelector("#player2-qmark");

    switch (toShow) {
        case 'image':
            imageDiv.style.display = 'flex';
            qMarkDiv.style.display = 'none';
            break;
        case 'qmark':
            imageDiv.style.display = 'none';
            qMarkDiv.style.display = 'flex';
            break;
    }
}


/**
 * Sets the image src of the image divs
 * @param image
 */
function setImages(p1Image, p2Image) {
    const player1 = document.querySelector("#player1-img");
    const player2 = document.querySelector("#player2-img");
    player1.src = './images/' + p1Image + '.png';
    player2.src = './images/' + p2Image + '.png';
}
