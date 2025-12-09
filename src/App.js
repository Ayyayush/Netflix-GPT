import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/login";
import Browse from "./components/Browse";
import Header from "./components/Header";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
