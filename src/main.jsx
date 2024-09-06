import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./bootstrap.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import cartStore from "./Redux/CartStore.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    
      
      <Provider store={cartStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
