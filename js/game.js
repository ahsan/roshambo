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


/*
    Rock, Paper, Scissors
 */


// gameDict is a dictionary of all the possible things that a player can pick
// in a single game. Each key has a corresponding array of other things that
// this key beats in a game.
// This dictionary implements the rules of the game.
const gameDict = {
    rock: ['scissors'],
    paper: ['rock'],
    scissors: ['paper']
};

// A simple addition in the gameDict easily extends the game to include Lizard and Spock
// const gameDict = {
//     rock: ['scissors', 'lizard'],
//     paper: ['rock', 'spock'],
//     scissors: ['paper', 'lizard'],
//     lizard: ['paper', 'spock'],
//     spock: ['scissors', 'rock'],
// };

const allThings = Object.keys(gameDict);

/**
 * Returns the result of the game for a given
 * player and opponent choice.
 * @param playerThing
 * @param opponentThing
 */
function getResult(playerThing, opponentThing) {

    if(!allThings.includes(playerThing) || !allThings.includes(opponentThing)) {
        throw new Error('Unknown thing(s).');
    }

    if(playerThing == opponentThing) {
        // Game is drawn if the player and opponent choose the same thing
        return 'draw';
    } else if(gameDict[playerThing].includes(opponentThing)) {
        // Player wins if playerThing's array includes opponent's thing
        return 'win';
    } else {
        // Player loses
        return 'lose';
    }
}

/**
 * Returns a random thing. Used for bot.
 */
function getRandom() {
    // Return a random thing from the allThings array
    return allThings[Math.floor(Math.random()*allThings.length)];
}