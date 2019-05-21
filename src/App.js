import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./store";

import Navbar from "./components/Navbar";
import GifGrid from "./components/GifGrid";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <GifGrid />
        </div>
      </Provider>
    );
  }
}

export default App;
