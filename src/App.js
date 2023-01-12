import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Navbar from './components/Navbar';
import History from './components/pages/History';
import ContactUs from './components/pages/ContactUs';
import SuccessStories from './components/pages/SuccessStories';
import Notice from './components/pages/Notice';
import Executives from './components/pages/Executives';
import Donate from './components/pages/Donate';

function App () {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact element={< Home />}/>
          <Route path='/sign-up' exact element={< SignUp />}/>
          <Route path='/history' exact element={< History />}/>
          <Route path='/contact-us' exact element={< ContactUs />}/>
          <Route path='/success-stories' exact element={< SuccessStories />}/>
          <Route path='/notice' exact element={< Notice />}/>
          <Route path='/executives' exact element={< Executives />}/>
          <Route path='/donate' exact element={< Donate />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;