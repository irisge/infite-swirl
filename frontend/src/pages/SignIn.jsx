import React from 'react';

import Footer from '../components/Footer';
import MobileHeader from '../components/MobileHeader';
import Navbar from '../components/Navbar';

import mail from '../assets/mail.svg';
import lock from '../assets/lock.svg';
import validate from '../assets/validate.svg';

function SignIn() {
  return (
    <div className=" flex flex-col h-full w-full justify-between landscape:h-auto">
      <Navbar />
      <div className="bg-light-green flex flex-col w-full h-full justify-evenly">
        <MobileHeader />
        <main className="flex flex-col w-full h-2/5 landscape:h-auto pb-4">
          <form className="flex flex-col gap-4 justify-evenly items-center h-full font-inter font-medium text-sm my-auto">
            <label
              className="flex justify-evenly bg-white rounded-2xl px-5 py-[10px]"
              htmlFor="email"
            >
              <img src={mail} alt="email" />
              <input
                type="mail"
                name="email"
                id="email"
                placeholder="Entre ton email"
                className="rounded-2xl pl-5 placeholder:text-dark-grey text-black"
              />
            </label>
            <label
              htmlFor="password"
              className="flex justify-evenly bg-white rounded-2xl px-5 py-[10px]"
            >
              <img src={lock} alt="mot de passe" />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Entre ton password"
                className="rounded-2xl pl-5 placeholder:text-dark-grey text-black"
              />
            </label>

            <button
              type="submit"
              className="bg-white rounded-full w-14 h-14 flex justify-center items-center"
            >
              <img src={validate} alt="soumettre" />
            </button>
          </form>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;
