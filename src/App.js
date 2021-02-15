import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Data from "./components/Data";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Some API endpoint I made last night</h1>
        <Data />
      </div>
    </Provider>
  );
}

export default App;
