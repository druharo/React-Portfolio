import React from "react";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import About from "./routes/about";
import Portfolio from "./routes/portfolio";
import Contact from "./routes/contact";
import Resume from "./routes/resume";



const router = createHashRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;