import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataProvider } from "./Components/DataProvider/DataProvider.jsx";
import { initialState, reducer } from "./Components/utility/Reducer.js"; // Corrected import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      {" "}
      {/* Fixed the prop name */}
      <App />
    </DataProvider>
  </StrictMode>
);
