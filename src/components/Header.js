
import { useEffect } from "react";
import gourmetGlideLogo from "../../images/logo.png";
import { Link } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom";
import useAuth from "../utils/useAuth";
import useLocalStorage from "../utils/useLocalStorage";
import useOnline from "../utils/useOnline"; 

// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={gourmetGlideLogo}
      alt="GourmetGLide Logo"
      title="GourmetGLide Logo"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const navigate = useNavigate();

  // call custom hook useLocalStorage for getting localStorage value of user
  const [getLocalStorage, , clearLocalStorage] = useLocalStorage("user");
 
  // call custom hook useAuth for user is loggedin or not
  const [isLoggedin, setIsLoggedin] = useAuth();
 
  useEffect(() => {
    if(getLocalStorage === null){
      setIsLoggedin(false);
    }
    }, [getLocalStorage]);
  
    
  // call custom hook useOnline if user is online or not
  const isOnline = useOnline();
 
  return (
    <div className="header">
    <Title />

    {/* if user is logged in then display userName */}
    {isLoggedin && (
      <div className="user-name">Hi {getLocalStorage?.userName}!</div>
    )}

    <div className="nav-items">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <i className="fa-solid fa-cart-shopping"></i>
        </li>
        <li>
          {/* use conditional rendering for login and logout */}
          {isLoggedin ? (
            <button
              className="logout-btn"
              onClick={() => {
                clearLocalStorage();
                setIsLoggedin(false);
              }}
            >
              Logout
              <span
                className={isOnline ? "login-btn-green" : "login-btn-red"}
              >
                {" "}
                ●
              </span>
            </button>
          ) : (
            <button className="login-btn" onClick={() => navigate("/login")}>
              Login
              <span
                className={isOnline ? "login-btn-green" : "login-btn-red"}
              >
                {" "}
                ●
              </span>
            </button>
          )}
        </li>
      </ul>
    </div>
  </div>
);
};

export default Header;
