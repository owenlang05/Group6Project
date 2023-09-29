# DINE HARD

Welcome to Dine Hard! This application is a CMS-style review site where users can search for restaurants by location, read and publish restaurant reviews as well as comment on existint reviews when logged in. 

## Table of Contents ##
1. [Welcome](./README.md#description)
3. [Technology](./README.md#technology)
2. [Installation](./README.md#installation)
4. [Functionality](./README.md#Functionality)
5. [Screenshot](./README.md#Screenshot)
6. [Deployed Application](./README.md#deployed-application)

## Technology

The application utilizes Handlebars.js as the templating language, MySQL and Sequelize ORM for the database, bootstrap CSS library, and the express-session npm package for authentication. It also utilizes the Starry Rating npm package library in conjunction with JQuery, as well as TripAdvisor rapid API for search queries.

## Installation ##

To install this application, first enter your terminal, run 'npm i', then run the following: 

npm i express,
npm i mysql, 
npm i sequelize,
npm i starry-rating

## Funtionality

Users can expect the following app functionality:

* When they initially visit the site, they are presented with a homepage that displays a search bar for searching restaurants by location.
* They are prompted to login or sign up before searching for restaurants.
* After searching for restaurant by city, they are presented with restaurant options from that city.
* If they click on any of the restaurants, they are taken to that restaurant's page where they can learn more about the location and see or publish any reviews of that restaurant.
* When they log in or sign up, they are taken to a dashboard page where they can see all of the reviews they have written.
* From the dashboard page they click on any of their existing reviews and either update them or delete them.
* Finally, the user can log out from the navigation.

## Screenshot

![Screenshot](./public/images/ScreenshotDineHard.png)

## Deployed Application

[Here is a link to the deployed application!](https://afternoon-everglades-28793-2b4d32cb92bf.herokuapp.com/)
