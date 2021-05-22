import React from "react";
import SearchCountry from "./components/searchCountry/searchCountry";
import { BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <Route exact path="/" component={SearchCountry} />
      </BrowserRouter>
  );
}

export default App;
