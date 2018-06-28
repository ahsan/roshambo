<div align="center">
    <div>
        <img src="./images/scissors.png" alt="Roshambo" width="100">
    </div>
   <div>
        <strong>Rock, Paper, Scissors!</strong>
    </div>
</div>

<hr>

# Running the application
1. Clone the repository
```
git clone https://github.com/ahsan/roshambo.git
```
2. Install some kind of http server, for example, `http-server`.
```
npm install http-server -g
```
3. Serve the application
```
http-server ./index.html
```

# Description
A simple vanilla JS application that lets you play Rock-Paper-Scissors! (RPSLS).
The app uses Bootstrap for its layout and different components. All other functions and events are handled by vanilla JS. The `game.js` module implements <i>RPSLS</i> logic.

## Features
- Play User vs Bot
- Play Bot vs Bot
- Keep score for all the games played
- The game can be easily extended to include Lizard and Spock by toggling comments on a few lines of code: `line 56-57 in (index.html)` , `line 43-49 and line 36-40 (game.js)`.

## Browser support
The application has been tested on the following browsers. Intended responsiveness is till 480px screen width.
- Chrome (desktop, mobile)
- Safari (desktop, mobile)

The target browser is Chrome v67.0 (mobile and desktop).

## Folder Structure
```
├── LICENSE
├── README.md
├── css
│   ├── base.styles.css     # Styles for responsiveness
│   └── styles.css          # Application styles
├── images                  # All the images used
│   ├── lizard.png
│   ├── paper.png
│   ├── rock.png
│   ├── scissors.png
│   └── spock.png
├── index.html              # Main template
└── js
    ├── game.js             # Logic for the Rock-Paper-Scissors game
    └── main.js             # Controllers for main template
```

Image Credits: <a href="http://picoplex.net/">Picoplex</a>.