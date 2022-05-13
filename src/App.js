import './App.css';
import Contact from './Contact';
import Home from './Home';
import React from 'react';
import Layout from './Layout';
import Exit from './Exit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Exit" element={<Exit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
