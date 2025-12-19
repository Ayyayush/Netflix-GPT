import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Login from "./components/login";
import Browse from "./components/Browse";
import appStore from "./utils/appStore";

const appRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/browse", element: <Browse /> },
]);

const App = () => {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
