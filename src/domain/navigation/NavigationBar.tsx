// import React, { useState } from 'react'
import { Nav, NavBarContainer, NavLogo } from './NavigationBar.styled'
// const HeaderEnum = {
//   HOME: 'Home',
//   ABOUT: 'About',
//   REVIEWS: 'Reviews',
//   CONTACTUS: 'Contact us',
// } as const

// type HeaderEnum = typeof HeaderEnum[keyof typeof HeaderEnum]

const NavigationBar = (): JSX.Element => {
  // const [click, setClick] = useState(false)
  // const handleClick = () => setClick(!click)
  // const closeMobileMenu = () => setClick(false)
  return (
    <div>
      {/* <nav className='navbar'>
        <div className='navBar-container'>
          <Link to='/' className='navbar-logo'>
            FEDU
            <i className='fas fa-meteor'></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                {HeaderEnum.HOME}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                {HeaderEnum.ABOUT}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/reviews'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {HeaderEnum.REVIEWS}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contactUs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {HeaderEnum.CONTACTUS}
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}
      <>
        <Nav>
          <NavBarContainer>
            <NavLogo>FedU</NavLogo>
            Navigation Bar
          </NavBarContainer>
        </Nav>
      </>
    </div>
  )
}

export default NavigationBar
