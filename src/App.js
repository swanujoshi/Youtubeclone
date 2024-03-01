import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import AllRoutes from './component/AllRoutes';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import DrawerSidebar from './component/LeftSidebar/DrawerSidebar';

function App() {
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: 'none',
  });

  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display: "flex",
      });
    } else {
      setToggleDrawerSidebar({
        display: "none",
      });
    }
  };
  return (
    <Router>
      <Navbar toggleDrawer={toggleDrawer} />
      <DrawerSidebar toggleDrawer={toggleDrawer} toggleDrawerSidebar={toggleDrawerSidebar} />
      <Home />
      <AllRoutes />
    </Router>
  );
}

export default App;