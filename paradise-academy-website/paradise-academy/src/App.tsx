import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Academics from '@/pages/Academics';
import Admissions from '@/pages/Admissions';
import Faculty from '@/pages/Faculty';
import Gallery from '@/pages/Gallery';
import Notices from '@/pages/Notices';
import Hostel from '@/pages/Hostel';
import Contact from '@/pages/Contact';
import Careers from '@/pages/Careers';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/hostel" element={<Hostel />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
