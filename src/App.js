import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProgramOfStudy from './components/pages/ProgramOfStudy';
import Unklab360 from './components/pages/Unklab360';
import ContactUs from './components/pages/ContactUs';
import AboutMe from './components/pages/AboutMe';
import Informatics from './components/pages/Informatics';
import InformationSystem from './components/pages/InformationSystem';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/programofstudy' component={ProgramOfStudy} />
        <Route path='/unklab360' component={Unklab360} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/about-me' component={AboutMe} />
        <Route path='/informatics' component={Informatics} />
        <Route path='/informationsystem' component={InformationSystem} />
      </Switch>
    </Router>
  );
}

export default App;