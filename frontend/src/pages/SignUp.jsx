import React from 'react';

import Footer from '../components/Footer';
import MobileHeader from '../components/MobileHeader';
import Navbar from '../components/Navbar';

import avatar from '../assets/avatar.svg';
import lock from '../assets/lock.svg';
import mail from '../assets/mail.svg';
import validate from '../assets/validate.svg';

function SignUp() {
  return (
    <div className=" flex flex-col h-full w-full justify-between landscape:h-auto">
      <Navbar />
      <div className="bg-light-green flex flex-col gap-4  w-full h-full justify-evenly">
        <MobileHeader />
        <main className=" flex flex-col w-full landscape:h-auto pb-4">
          <form className="flex flex-col gap-4 justify-evenly items-center h-full font-inter font-medium text-sm my-auto">
            <label
              className="flex justify-evenly bg-white rounded-2xl px-5 py-[10px] min-h-[45px]"
              htmlFor="firstname"
            >
              <img src={avatar} alt="firstname" />
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Entre ton prénom"
                className="rounded-2xl pl-5 placeholder:text-dark-grey text-black"
              />
            </label>
            <label
              className="flex justify-evenly bg-white rounded-2xl px-5 py-[10px] min-h-[45px]"
              htmlFor="lastname"
            >
              <img src={avatar} alt="lastname" />
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Entre ton nom"
                className="rounded-2xl pl-5 placeholder:text-dark-grey text-black"
              />
            </label>
            <label
              htmlFor="birthdate"
              className="flex flex-col gap-2 justify-between w-[251px] rounded-2xl"
            >
              Date de Naissance:
              <div className="flex flex-row w-auto justify-between">
                <input
                  type="text"
                  name="birthdate"
                  id="birthdate"
                  placeholder="JJ"
                  className="flex rounded-2xl pl-5 placeholder:text-dark-grey text-black h-11"
                  size="4"
                />
                <input
                  type="text"
                  name="birthdate"
                  id="birthdate"
                  placeholder="MM"
                  className="flex rounded-2xl pl-5 placeholder:text-dark-grey text-black h-11"
                  size="4"
                />
                <input
                  type="text"
                  name="birthdate"
                  id="birthdate"
                  placeholder="AAAA"
                  className="flex rounded-2xl p-5 placeholder:text-dark-grey text-black h-11"
                  size="4"
                />
              </div>
            </label>

            <label
              className="flex justify-evenly bg-white rounded-2xl px-5 py-[10px] min-h-[45px]"
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
              className="flex justify-evenly bg-white rounded-2xl px-5 py-[10px] min-h-[45px]"
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

export default SignUp;
