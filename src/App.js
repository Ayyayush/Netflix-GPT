import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";

import Login from "./components/login";
import Browse from "./components/Browse";

import appStore from "./utils/appStore";
import { addUser, removeUser } from "./utils/userSlice";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";

const appRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/browse", element: <Browse /> },
]);

const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return <RouterProvider router={appRouter} />;
};

const App = () => (
  <Provider store={appStore}>
    <AppContent />
  </Provider>
);

export default App;
