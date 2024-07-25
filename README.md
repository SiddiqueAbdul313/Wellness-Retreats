## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Project Localhost

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Presentation

So, starting with the folder structure:

I have created a /Home folder in which there is a components folder including necessary components: lets break down the list of components i have used

## Root Directory

page.js ---> This is a Parent to render all the Child components
globals.css ---> In this i have imports and Required/Necessary CSS only for global use case

## Components

Header.js ---> This is the header component which is the top most of the layout including the name of the project
HeroSection.js ---> This Section includes the Image, Title, Description as given in the layout
FilterDropdown.js ---> This is a component for the FILTER functionality which is one of the main part of the project the filter functionality is working throught the API.
SearchBar.js ---> This search bar is used to filter the cards with the TITLE
Card.js ---> I have used the Card component and mapped them using the map function and calling the Data through the API
SlideButton ---> I have implemented the Buttons (Previous/Next) for the PAGINATION functionality through which we can slide to the next cards list

## Extra Functionality

As an extra functionality i have added a Loader which loads while the data is being fetched
When the Search Results are not found then a UI is Shown with No Results Found

## Responsive Design

Considering the responsive part this page is responsive for Mobile device as well as Desktop

## Thank You for giving me an opportunity for this Assignment
