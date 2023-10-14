import React, { useEffect, useState } from 'react';
import '../CSS/Navbar.css';

function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  const showMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Initial check for screen width
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='navbar'>
      <div className="logo__container">
        <div className="logo">
          <img src="/images/Logo1.png" alt="logo" />
        </div>
      </div>

      {screenWidth < 900 ? (
        <>
          {menuOpen ? (
            <div className="mobile__navlinks__container">
              {/* Your mobile menu content here */}
              <div className='closeIcon' onClick={closeMenu}>
                Close Menu
              </div>
            </div>
          ) : (
            <div className="burgerMenu" onClick={showMenu}>
              Open Menu
            </div>
          )}
        </>
      ) : (
        <div className="navlink__section">
          {/* Desktop navigation links */}
          <a className="navlink" href="#">01. HISTORY</a>
          <a className="navlink" href="#">02. TEAM</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
