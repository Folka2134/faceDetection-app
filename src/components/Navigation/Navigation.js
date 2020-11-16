import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        className="white"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <p
          className="f3 link dim underline pa3 pointer"
          onClick={() => onRouteChange("signout")}
        >
          Sign out
        </p>
      </nav>
    );
  } else {
    return (
      <div
        className="white"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <p
          className="f3 link dim underline pa3 pointer"
          onClick={() => onRouteChange("signin")}
        >
          Guest
        </p>
        <p
          className="f3 link dim underline pa3 pointer"
          onClick={() => onRouteChange("signin")}
        >
          Sign in
        </p>
        <p
          className="f3 link dim  underline pa3 pointer"
          onClick={() => onRouteChange("register")}
        >
          Register
        </p>
      </div>
    );
  }
};

export default Navigation;
