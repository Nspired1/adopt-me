import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="p-0 m-0 "
        style={{
          background:
            "url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)",
        }}
      >
        <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
          <Link to="/" className="text-6x1 text-white hover:text-gray-200">
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
