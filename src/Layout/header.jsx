import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  const navLinks=[
    {name:"Home",link:"/"},
    {name:"About us",link:"/about"},
    {name:"Courses",link:"/Courses"},
    {name:"Contact us",link:"/contact"},
    {name:"FAQ's",link:"/faq"},
  ]
  return (
    <div>
      <header>
    <nav className="nav">
      <div className="logo">
        <img src="./images/image 2.png" alt="logo" />
      </div>
      <div className="input">
        <img src="./images/search.png" alt="" />
        <input type="text" placeholder="Want to learn?" />
        <div className="explore">
          <span>Explore</span>
          <img src="./images/chevron-down.png" alt="" />
        </div>
      </div>
      <div>
        <ul className="nav-links">
          {navLinks.map((link)=>(
            <li key={link.name}>
              <Link
              to={link.link}
              >
                {link.name}
              </Link>

            </li>
          ))}
        </ul>
      </div>
      <div className="btn">
        <button className="btn-signIn">Sign in</button>
        <button className="btn-signUp">Create free account</button>
      </div>
    </nav>
  </header>
    </div>
  )
}

export default Header
