import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { useRef } from 'react'

export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          {<Link className="navbar-brand" to="/Yourblogs" onClick={() => props.YourBlogBlogsSearchfxn()} >Your Blogs</Link>}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Allblogs">Allblogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                {<Link className="nav-link active" aria-current="page" to="/AddBlog">Add Blog</Link>}
              </li>
              <li className="nav-item">
                {<Link className="nav-link active" aria-current="page" to="/Login">Login</Link>}
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link to="/"><input className="form-control me-2" type="text" placeholder="Enter the city"
                onKeyUp={() => props.searchfxn()} aria-label="Search" ref={props.cityInput} /></Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

