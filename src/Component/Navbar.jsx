import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar({logindata}) {

  let navigate = useNavigate()

  function logout(){
    localStorage.removeItem("token")
    navigate("/login")
    window.location.reload()
  }

  return (
    <nav className="navbar navbar-expand-lg bg">
      <div className="container-fluid">

        <Link className="navbar-brand text-white" to="">Trend</Link>

        <div className="collapse navbar-collapse">

        {logindata ?
        <ul className="navbar-nav me-auto">

          <li className="nav-item">
            <Link className="nav-link text-white" to="home">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="mo">Movie</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="tv">Tv</Link>
          </li>

        </ul>
        :""}

        <ul className="navbar-nav ms-auto">

        {logindata ?

        <li className="nav-item">
          <span onClick={logout} className="nav-link text-white" style={{cursor:"pointer"}}>
            Logout
          </span>
        </li>

        :

        <>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/login">Login</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="re">Register</Link>
          </li>
        </>
        }

        </ul>

        </div>
      </div>
    </nav>
  )
}

