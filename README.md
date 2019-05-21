# Redux-Gif-App
  
Redux-Gif is a responsive React app that demonstrates how [Redux](https://redux.js.org/) can be used for state management and [Redux-Saga](https://redux-saga.js.org/) middleware to manage API calls from [Giphy API](https://haha.giphy.api.com).


## Demo
![](redux-gif-app-demo)
[Redux-Gif-App - Live Demo](https://buralog.github.io/react-twitch-app/)

## Built With
>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* [React](https://reactjs.org/) - UI Library
* [Redux](https://redux.js.org/) - State container for JS Apps
* [React-redux](https://react-redux.js.org/) - React bindings for Redux
* [Redux-saga](https://redux-saga.js.org/) - Redux middleware

## Installation
### **1 -**  Clone the project and install the dependencies:

  [Node.js](http://nodejs.org/) is  required to get ``npm``.

```
$ git clone https://github.com/buralog/redux-gif-app.git
$ cd redux-gif-app
$ npm install
```

### **2 -** Setup:


[GIPHY API Key](https://developers.giphy.com/) is required to run the project.

Use your key in ``src > API > index.js`` file:

```js
const KEY = YOUR_API_KEY;
```

### **3 -** Run the app:

```sh
$ npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

## Testing
```sh
$ npm test
```
Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

