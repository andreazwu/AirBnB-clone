import React from "react"
import { useDispatch } from "react-redux"
import { login } from "../../store/session"
import "./DemoUser.css"

const DemoUser = () => {
  const dispatch = useDispatch()
  const loginDemoUser = () => {
    return dispatch(login({
      credential: "Demo-lition1",
      password: "password1"
    }))
  }

  return (
    <span id="demo-user-container">
      <button id="demo-user" onClick={loginDemoUser}>
        Login as Demo User
      </button>
    </span>
  )
}

export default DemoUser