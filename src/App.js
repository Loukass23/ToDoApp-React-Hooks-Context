import React from 'react';
import Navbar from './components/Navbar';
import ToDo from './components/ToDo';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';
import ThemeToggle from './components/ThemeToggle';
import UserList from './components/UserList';
import TasksContextProvider from './context/TasksContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <UserList />
          <TasksContextProvider>
            <ToDo />
          </TasksContextProvider>
          <ThemeToggle />
          <Navbar />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
