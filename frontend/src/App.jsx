import React from 'react';
import equals from './assets/equals.svg';
import leafFooter from './assets/leafFooter.svg';

function App() {
  return (
    <div>
      <nav className="bg-white drop-shadow-nav flex flex-row justify-between items-center w-full p-4">
        <h1 className="text-xl font-inter font-black">THE INFINITE SWIRL</h1>
        <button type="button">
          <img src={equals} alt="Logo menu" className="" />
        </button>
      </nav>
      <header className="bg-hero-pattern flex flex-col items-center justify-between bg-cover bg-center min-h-[328px] py-6">
        <h2 className="font-inter font-black text-2xl text-white mx-10 self-center max-w-xs">
          OBTIENT LA CONSIGNE DE TRI EN RENSEIGNANT LE CODE BARRE DU PRODUIT
        </h2>
        <button
          type="button"
          className="bg-light-green rounded-3xl font-semibold text-base text-black py-2 px-11"
        >
          ME CONNECTER
        </button>
        <button
          type="button"
          className="bg-white rounded-full font-semibold text-base text-black py-2 px-6"
        >
          {' '}
          CRÉER MON COMPTE
        </button>
      </header>
      <div className="bg-light-green grid text-black gap-4 font-open p-4">
        <div>
          <h3 className="font-bold text-lg">
            Fais les bons choix pour la planète!
          </h3>
          <p className="font-regular text-base">
            The infinite swirl décrypte les étiquettes de vos produits et
            analyse la consigne de tri rattachée pour t’aider à trier sans
            erreur.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg">
            Plus d’excuse pour ne pas jeter le verre!
          </h3>
          <p className="font-regular text-base">
            The infinite swirl localise le silo à verre le plus proche de ton
            adresse. Bonne nouvelle, ça marche pour tous les points d’apports!
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg">
            N’oublie plus de sortir la poubelle!
          </h3>
          <p className="font-regular text-base">
            The infinite swirl te permet d’avoir accès aux jours de collecte de
            ta commune.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg">
            Garde un suivi de tes éco-gestes.
          </h3>
          <p className="font-regular text-base">
            The infinite swirl te permet de garder en tête tes éco-gestes.
          </p>
        </div>
      </div>
      <footer className="flex flex-row flex-nowrap justify-between m-2 px-2">
        <div className="flex flex-col ">
          <div className="flex flex-row ">
            <h4 className="text-green font-inter font-black text-base">
              ©2023
            </h4>
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
    </div>
  );
}

export default App;
