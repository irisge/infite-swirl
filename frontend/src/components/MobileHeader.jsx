import React from 'react';

import binny from '../assets/binnyBis.svg';

function MobileHeader() {
  return (
    <header className="flex flex-col items-center justify-evenly w-full h-3/5 landscape:h-auto font-open font-semibold text-base text-center pt-4">
      <img src={binny} alt="hero" />
      <h2 className="font-courgette text-xl">Bienvenue!</h2>
      <div className="flex flex-col items-center">
        <h1 className="w-3/4">Il est temps d’apprendre à trier !</h1>
        <h2 className="w-3/4">
          Binny t’aide à éviter les erreurs de tri au quotidien
        </h2>
      </div>
    </header>
  );
}

export default MobileHeader;
