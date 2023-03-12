import React from 'react';
import leafFooter from '../assets/leafFooter.svg';

function Footer() {
  return (
    <footer className="flex flex-row flex-nowrap justify-between m-2 px-2 bg-white">
      <div className="flex flex-col ">
        <div className="flex flex-row ">
          <h4 className="text-green font-inter font-black text-base">©2023</h4>
          <h4 className="font-inter font-black text-base">
            THE INFINITE SWIRL
          </h4>
        </div>
        <a href="/" className="text-sm text-green font-open font-bold">
          Nous contacter
        </a>
      </div>
      <img src={leafFooter} alt="leaf on footer" className="m-0" />
    </footer>
  );
}

export default Footer;
