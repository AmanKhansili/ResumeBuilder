import { useState } from "react";
import "./App.css";
import { Navigate, Outlet } from "react-router-dom"; // Importing `Navigate` and `Outlet` components from react-router-dom
import { RedirectToSignIn, useUser } from "@clerk/clerk-react"; // Importing the `useUser` hook from Clerk
import Header from "./components/custom/Header";

function App() {
  const [count, setCount] = useState(0);
  const { user, isLoaded, isSignedIn } = useUser(); // Destructuring values from the `useUser` hook

  // Checking if the user is not signed in and the user data is loaded
  if (!isSignedIn) {
    return <RedirectToSignIn />; // Redirecting to the sign-in page if the user is not signed in
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
