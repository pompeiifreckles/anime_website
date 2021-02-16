import React from 'react'

import './App.css';
import HomeScreen from './Screens/HomeScreen'; 

const styles = {
  light: {
    theme: 'light',
    backgroundColor: 'white',
  },
  dark: {
    theme: 'dark',
    backgroundColor: 'black',
  },
}

const Theme = React.createContext()

function App() {
  return (
    <div className="App">
      <Theme.Provider value={styles}>
        <HomeScreen />
        {/* <div style={{backgroundColor: 'black', width: '100%', height: window.screen.height}}></div> */}
      </Theme.Provider>
    </div>
  );
}

export {Theme}
export default App;