import React, { useState } from "react";

import Navbar from "./NavBar";
import Providers from "./Providers";

const App = () => {
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <Providers>
      <Navbar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} />
    </Providers>
  );
};

export default App;
