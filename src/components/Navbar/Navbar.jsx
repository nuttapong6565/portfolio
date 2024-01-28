import React, {useState, useEffect}  from 'react'
import "./Navbar.css"

function Navbar() {
  const onClickNavToggle = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.add("show-menu");
  } 
  const onClickNavClose = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
  } 
  function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove('show-menu');
  }

  const [load, setLoad] = useState({
    isLoading: true
  })
  useEffect(() => {
    setLoad({isLoading: false})
  }, [])

  return (
    <div>
      {load.isLoading? "" : 
        <div>
          <nav className="nav container padd-15">
            <a href="#home" className="nav-Logo">
              <h2 className="nav-logo-item">Nuttapong</h2>
            </a>
            <div className="nav-menu" id="nav-menu">
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="#home" className="nav-link active-link" onClick={linkAction}>Home</a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link" onClick={linkAction}>About</a>
                </li>
                <li className="nav-item">
                  <a href="#skills" className="nav-link" onClick={linkAction}>Skills</a>
                </li>
                <li className="nav-item">
                  <a href="#experience" className="nav-link" onClick={linkAction}>Experience</a>
                </li>
              </ul>
              <div className="nav-close" id='nav-close' onClick={onClickNavClose}>
                <i className="lni lni-close"></i>
              </div>
            </div>
            <div className="nav-btns">
                <div className="nav-toggle" id='nav-toggle' onClick={onClickNavToggle}>
                  <li className="lni lni-menu"></li>
                </div>
              </div>
          </nav>
        </div>
      }
    </div>
  ) 
}

export default Navbar