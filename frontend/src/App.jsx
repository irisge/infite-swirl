import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connexion" element={<SignIn />} />
      <Route path="/creation-compte" element={<SignUp />} />
    </Routes>
  );
}

export default App;
