# Football Players Project

## Overview

The Football Players project is a web application where users can create football players, add comments to them, and edit or delete the players they have created.

The application has the following features:

- Users can create a player with name, age, position, nationality and photo.
- Users can add comments to a player, which will appear below the player's details.
- Users can edit and delete players that they have created.
- Users can only see the catalog of players if they are not logged in.
- Users can see the details of a player in the catalog.
- If a user tries to access a page that does not exist, they will be redirected to the not found page.

## Technologies

The project was built using the following technologies:

- React.js for the frontend development
- HTML and CSS for the styling
- React Router for the routing

### Models

- Player: represents a football player, with fields such as name, age, position, nationality and photo.
- Comment: represents a comment on a football player, with fields such as text and author.

### Views

- Home: displays a welcome message and links to the catalog and login pages.
- Catalog: displays a list of football players and their basic information.
- PlayerDetails: displays the details of a selected football player, including comments.
- Login: allows users to log in to the application.
- NotFoundPage: displays a "404 Not Found" message when a user tries to access a non-existent page.

### Controllers

- PlayerController: handles CRUD (Create, Read, Update, Delete) operations for the Player model.
- CommentController: handles CRUD operations for the Comment model.
- UserController: handles user authentication and authorization.

## Conclusion

The Football Players project is a simple web application that allows users to create, view, edit, and delete football players, as well as add comments to them. It demonstrates the use of React.js, HTML, and CSS for frontend development.