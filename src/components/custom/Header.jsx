import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-3 flex justify-between shadow-md">
      <img src="/logo.svg" alt="" />
      {isSignedIn ? (
        <div className="flex items-center gap-5">
          <Link to={'/dashboard'}>
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button className="bg-[#dd79a3] hover:bg-[#66b7dd]">
            Get Started
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
