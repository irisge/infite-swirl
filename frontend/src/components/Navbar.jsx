import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import equals from '../assets/equals.svg';

function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const getActiveLinkStyle = ({ isActive }) => {
    if (isActive) {
      return { color: '#4C9A74' };
    }
    return null;
  };

  return (
    <div>
      <nav className="relative bg-white drop-shadow-nav flex flex-row justify-between items-center w-full h-16 p-4">
        <h1 className="text-xl font-inter font-black">THE INFINITE SWIRL</h1>
        <button type="button" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
          <img src={equals} alt="Logo menu" className="" />
        </button>
      </nav>
      <div
        className={
          mobileNavOpen
            ? 'absolute right-0 z-10 w-full origin-top-right bg-white py-1 h-full'
            : 'hidden'
        }
      >
        <ul className="flex flex-col justify-between h-2/5 font-bold m-4">
          <NavLink
            style={getActiveLinkStyle}
            to="/on-trie"
            onClick={() => setMobileNavOpen(false)}
          >
            ON TRIE ?
          </NavLink>
          <NavLink
            style={getActiveLinkStyle}
            to="/dechetteries"
            onClick={() => setMobileNavOpen(false)}
          >
            DECHETTERIES
          </NavLink>
          <NavLink
            style={getActiveLinkStyle}
            to="/jour-de-collecte"
            onClick={() => setMobileNavOpen(false)}
          >
            JOURS DE COLLECTE
          </NavLink>
          <NavLink
            style={getActiveLinkStyle}
            to="profil"
            onClick={() => setMobileNavOpen(false)}
          >
            PROFIL
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
