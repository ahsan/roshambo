<div align="center">
    <div>
        <img src="./images/spock.png" alt="Roshambo" width="100">
    </div>
   <div>
        <strong>Rock, Paper, Scissors, Lizard, Spock!</strong>
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
A simple vanilla JS application that lets you play Rock-Paper-Scissors-Lizard-Spock! (RPSLS).
The app uses Bootstrap for its layout and different components. All other functions and events are handled by vanilla JS. The `game.js` module implements <i>RPSLS</i> logic.

## Features
- Play User vs Bot
- Play Bot vs Bot
- Keep score for all the games played


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