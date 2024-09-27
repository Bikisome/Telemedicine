import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SpecialtiesPage from './pages/SpecialtiesPage ';
import ShowAllDrs from './pages/ShowAllDrs';

function App() {
  return (

    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialties" element={<SpecialtiesPage />} />
        <Route path="/showalldoctors" element={<ShowAllDrs />} />
      </Routes>
    </Layout>

  );
}

export default App;