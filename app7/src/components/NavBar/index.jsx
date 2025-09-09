import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const[isLoggedIn,setIsLoggedIn] = useState(false);

  useEffect( () => {
    const token =localStorage.getItem("token");
    if(token){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
  },[isLoggedIn]);

  const onLogoutHandler =() => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link class="navbar-brand" to="/">
        EShop
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
 
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home
            </Link>
          </li>
         
           <li class="nav-item">
            <Link class="nav-link" to="/about">
              About
            </Link>
          </li>
           <li class="nav-item">
            <Link class="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          {isLoggedIn ? (
            <button onClick={onLogoutHandler}className="btn btn-danger">
              Logout
            </button>
          ): (
            <Link to ="/login" className="btn btn-primary">
              Login
            </Link>
          )
          
          }
        </form>
      </div>
    </nav>
  );
};
export default Navbar;
 
 