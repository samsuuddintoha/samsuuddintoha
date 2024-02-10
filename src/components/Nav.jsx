import { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="navbar">
              <div className="navLogo">
                <h1>Samsuuddin <span>TOHA</span></h1>
              </div>
              <nav className={`${isOpen && 'open'}`}>
                <div  className={`navItem ${isOpen && 'open'}`}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="experience">Experience</NavLink>
                <NavLink to="projects">Projects</NavLink>
                <NavLink to="contact">Contact</NavLink>
                </div>
                <a href="#contact" className='btnDefault'>Hire me</a>
              </nav>
              <div className={`navToggle ${isOpen && 'open'}`} onClick={()=> setIsOpen(!isOpen)}>
                <div className="bar"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Nav
