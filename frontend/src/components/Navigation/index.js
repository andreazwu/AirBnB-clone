import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import ProfileButton from "./ProfileButton"
import FunctionButton from "./FunctionButton"
// import logo from "../../images/logo.jpg" //blue
import logo from "../../images/logo2.jpg" //pink

import "./Navigation.css"


const Navigation = ({ isLoaded }) => {
  const currentUser = useSelector(state => state.session.user)

  let sessionLinks

  if (currentUser) {
    sessionLinks = (
      <ProfileButton user={currentUser} />
    )
  } else {
    sessionLinks = (
      <FunctionButton />
    )
  }

  return (
    <div>

        <NavLink exact to="/">
          <img className="logo" src={logo} />
        </NavLink>

        {/* {isLoaded && ( // breaks DemoUser */ }
          <div className="sessionlinks">
            {sessionLinks}
          </div>
        {/* )} */}

        <div className="headerbreak"></div>
    </div>
  )
}

export default Navigation
