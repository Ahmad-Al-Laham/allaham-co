import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./locales/index.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "./components/UI/Loader/index.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>
);
