import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default Home;
