import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";

// Components
import Login from "./components/Login";
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
    element: <Login />, // Login page (NO Header)
  },
  {
    path: "/browse",
    element: <Browse />, // Browse page (Header inside Browse)
  },
]);

// ---------------- APP WRAPPER ----------------
const AppContent = () => {
  const dispatch = useDispatch();

  // Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in → store user in Redux
        const { uid, email, displayName } = user;

        dispatch(
          addUser({
            uid,
            email,
            displayName,
          })
        );
      } else {
        // User is signed out → clear Redux store
        dispatch(removeUser());
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return <RouterProvider router={appRouter} />;
};

// ---------------- MAIN APP ----------------
function App() {
  return (
    // Provide Redux store to entire app
    <Provider store={appStore}>
      <AppContent />
    </Provider>
  );
}

export default App;
