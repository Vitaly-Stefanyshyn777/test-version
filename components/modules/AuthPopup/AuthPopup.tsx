import { useState } from "react";
import AuthPopupRegistration from "./AuthPopupRegistration";
import AuthPopupLogin from "./AuthPopupLogin";

const AuthPopup = () => {
  const [isAuthSwitched, setIsAuthSwitched] = useState(false);
  const [isSignInActive, setIsSignInActive] = useState(false);
  const [isSignupActive, setIsSignupActive] = useState(true);

  const toggleAuth = () => {
    setIsAuthSwitched(!isAuthSwitched);
    setIsSignInActive(!isSignInActive);
    setIsSignupActive(!isSignupActive);
  };

  const handleSignupWithOAuth = () => {
    // TODO: реалізувати логіку OAuth, наприклад через Firebase або Auth0
    console.log("OAuth signup triggered");
  };

  return (
    <div className="container auth-popup">
      <div>
        <div className="starsec" />
        <div className="starthird" />
        <div className="starfourth" />
        <div className="starfifth" />
      </div>
      <div className={`auth-popup__card ${isAuthSwitched ? "switched" : ""}`}>
        <div className="auth-popup__card__inner">
          <AuthPopupRegistration
            toggleAuth={toggleAuth}
            isSideActive={isSignupActive}
            handleSignupWithOAuth={handleSignupWithOAuth}
          />
          <AuthPopupLogin
            toggleAuth={toggleAuth}
            isSideActive={isSignInActive}
            handleSignupWithOAuth={handleSignupWithOAuth}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPopup;
