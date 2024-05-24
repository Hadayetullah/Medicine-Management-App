// src/App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import store from "./redux/store";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/common/Navbar";

import "./assets/index.css";

function App() {
  return (
    <>
      {/* <Provider store={store}>
        <BrowserRouter>
          <Navbar />

          <div className="container mx-auto py-4">
            <AppRoutes />
          </div>
        </BrowserRouter>
      </Provider> */}
      <BrowserRouter>
        <Navbar />

        <div className="container mx-auto px-4 py-1 sm:px-0 sm:py-3">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
