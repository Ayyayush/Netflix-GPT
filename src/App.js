import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";

// Components
import Login from "./components/login";
import Browse from "./components/Browse";

// Redux
import appStore from "./utils/appStore";
import { addUser, removeUser } from "./utils/userSlice";

// Firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";

// ---------------- ROUTER CONFIG ----------------
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

// ---------------- APP CONTENT ----------------
const AppContent = () => {
  const dispatch = useDispatch();

  // Listen to Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(
          addUser({
            uid,
            email,
            displayName,
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

// ---------------- MAIN APP ----------------
function App() {
  return (
    <Provider store={appStore}>
      <AppContent />
    </Provider>
  );
}

export default App;
