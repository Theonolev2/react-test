import React from 'react';
import GMap from './components/MapComponent';
import Banner from './components/BannerComponent';
import NewUserForm from './components/forms/NewUserForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/new-user" element={<NewUserForm/>} />
        </Routes>
        <Banner/>
        <GMap/>
      </Router>
    </div>
  )
};


export default App;
