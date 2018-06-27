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

// Global variables
let playerOneType;
selectPlayerOneType(); // init playerOneType
let playerOneChoice;

/**
 * Handler for player 1 type selection.
 * @param type
 */
function selectPlayerOneType(type) {
    const allowedTypes = ['User', 'Bot'];
    if(allowedTypes.includes(type)) {
        playerOneType = type;
    } else {
        playerOneType = 'User';
    }
    const button = document.querySelector("#dropdownMenuButton");
    button.innerHTML = playerOneType;
}


/**
 * Handler for player one choice selection
 * @param choice
 */
function selectPlayerOneChoice(btn) {
    playerOneChoice = btn.innerHTML.trim().toLowerCase();
    console.log(playerOneChoice);
}

/**
 * Handler for go button
 */
function onGoClicked(){
    console.log('inside go');

    const playerTwoChoice = getRandom();
    console.log('Users choice: ', playerOneChoice);
    console.log('Bots choice: ', playerTwoChoice);
    console.log(getResult(playerOneChoice, playerTwoChoice));

}