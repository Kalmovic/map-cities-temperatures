# Open Weather Cities Map

This is a code challenge!

## Configuration

- Clone this repo and create a file `.env` in the same level as the `package.json` file
- Add to this file this global variable: REACT_APP_API_KEY=
- [Register in openweather api website](https://home.openweathermap.org/users/sign_up "Register in openweather api website") to get your key and use it in the variable above.

## Available Scripts

In the project directory, you can run:

### `yarn` to install dependencies

### `yarn start` to run the application

# Techs used

## Leaflet

Leaflet is a free map resource that developers can use to build application that needs a map in it. There is no need for api key, just download the package (I used the React verion, 'react-leaflet') and plug it inside your code.

## react-modal

react-modal to create a window when a city is clicked. The children inside the component <ReactModal> will be rendered as its content.

## Axios

Axios is a library that helps develepers to make http requests to external sources. I used axios to access `openweathermap` api.

## Styled Components

Styled Components allow us to create React Components with styles attached to it.

---

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
