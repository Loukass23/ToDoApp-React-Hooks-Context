import React from 'react';
import Navbar from './components/Navbar';
import ToDo from './components/ToDo';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';
import ThemeToggle from './components/ThemeToggle';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <ToDo />
          <ThemeToggle />
          <Navbar />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
