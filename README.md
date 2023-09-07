# Music App Project

Welcome to the Music App project! This application allows you to listen to music, control playback, and enjoy a dynamic background that changes according to the album cover art.

## Project Overview

This project is built using React for the frontend and Apollo Server for handling GraphQL queries. It provides a music player interface and uses the ColorThief library to dynamically change the background color based on the album cover art. Here's a brief overview of the project structure:

- `src/`
  - `components/`: Contains React components for the music player, sidebar, and main page.
  - `store/`: Redux store setup and actions for controlling music playback.
  - `graphql/`: GraphQL queries for fetching song data.
  - `App.js`: The main application component.
  - `musicPlayer.css`: Styling for the music player.

## Getting Started

To run the Music App project, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project folder.

3. Install the project dependencies.

4. Start the development server.

5. The application should now be running locally on http://localhost:3000. You can access it through your web browser.

## Usage

- Use the music player to play, pause, and skip songs.
- The background color dynamically changes based on the album cover art.
- Explore the music library by interacting with the sidebar and main page.

## Server File Importance

The project relies on a server file to fetch music data. 
The server handles GraphQL queries to retrieve information about songs, 
including their names, artists, URLs, and more. Make sure to have a working server in place to run the project successfully.
You can customize the server code based on your data source.
The server file runs separately on port http://localhost:8000. 
1. onpen index.js in server folder and run the command node index.js

## Contact

If you have any questions, encounter issues, or would like to contribute to this project, feel free to contact us at bemehla@gmail.com.

Happy listening!
