# Dicee - Dice Game

A simple web-based dice game that simulates rolling two dice and displays which player wins — or if it’s a draw!

## Demo

Click the **refresh button** (or press F5) to roll the dice.  
Each refresh gives a new random outcome.

## Screenshot

![Dicee Game Screenshot](./images/dice6.png)

##  Built With

- **HTML** – structure of the game
- **CSS** – styling with custom fonts and layout
- **JavaScript** – random dice generation and dynamic DOM manipulation
- **Google Fonts** – using _Lobster_ and _Indie Flower_ for unique typography

## Project Structure
dicee/
│
├── images/
│ ├── dice1.png
│ ├── dice2.png
│ ├── dice3.png
│ ├── dice4.png
│ ├── dice5.png
│ └── dice6.png
│
├── index.html
├── styles.css
└── index.js

## How It Works

- Each time the page loads, JavaScript:
  - Generates a random number between 1 and 6 for each player.
  - Sets the corresponding dice image for each player.
  - Updates the `<h1>` heading to display the winner or a draw.
