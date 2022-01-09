import React from "react";
import ReactDOM from "react-dom";

import App from "./modules/App";
import Providers from "./modules/App/Providers";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
