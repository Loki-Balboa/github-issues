import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SearchResults from "../SearchResults";
import UserDetails from "../UserDetails";
import Navbar from "./NavBar";

const App = () => {
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <BrowserRouter>
      <Navbar setSearchPhrase={setSearchPhrase} />
      <Routes>
        <Route
          path="/"
          element={<SearchResults searchPhrase={searchPhrase} />}
        />
        <Route path=":userLogin" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
