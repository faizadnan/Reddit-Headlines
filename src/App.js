import React from 'react';
import Navbar from './Navbar';
import Redit_main from './Redit/Redit_main';
import classes from './App.module.css'



function App() {
  

  return (
   <>
   <div className={classes.main}>
   <Navbar/>
   <Redit_main/>
   
   </div>
   </>
  )
}

export default App;
