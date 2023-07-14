# Spotify Game
An album guessing game that challenges users to match the correct album cover to the track 🎵. 

This application uses the [Spotify API](https://developer.spotify.com/documentation/web-api).

## 💻 Tech Stack
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)

## ‍🏃 Running locally
1. First you will need to register for a [Spotify Client ID](https://developer.spotify.com/dashboard/applications).

2. Clone the project:
    ```sh
    https://github.com/lara-mpt/spotify-game.git
    ```

3. Create an env file:
    ```sh
    touch server/.env
    ```
   
4. Set the following variables: 

    ```
    CLIENT_ID="YOUR_CLIENT_ID"
    CLIENT_SECRET="YOUR_CLIENT_SECRET"
    REDIRECT_URI=http://localhost:4000/callback
    ```

5. Install both client and server dependencies:
    ```sh
    npm run install
    ```

6. Start the game:
    ```sh
    npm start
    ```
   
7. Now visit http://localhost:3000 to play the game!

## 📷 Screenshots
_First screenshot shows the initial game screen._

<img src="https://i.postimg.cc/DzVj0rJY/Screenshot-2023-07-08-at-13-33-07.png" width=60% height=60%  alt="A screenshot of the game">

_Second screenshot depicts a game where all 4 album covers have been guessed._

<img src="https://i.postimg.cc/k5J2CZMJ/Screenshot-2023-07-08-at-13-33-23.png" width=60% height=60%  alt="A screenshot of the game">

