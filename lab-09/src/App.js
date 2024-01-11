// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import StudentListing from "./StudentListing";
import StudentProfile from "./StudentProfile";

const App = () => (
  <Provider store={store}>
    <div>
      <StudentListing />
      <StudentProfile />
    </div>
  </Provider>
);

export default App;
