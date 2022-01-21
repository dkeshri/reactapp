import React from 'react';
import './assets/css/font-awesome.css'
import './App.css';
import {AppRouter} from './Router'
import {createDatabaseSchema} from './data/DatabaseSchema'
import ClassComponent from './Components/React/ClassComponent';

function App() {
  createDatabaseSchema();
  return (
    <div className="App">
      <AppRouter/>
      <ClassComponent LastName="keshri"/>
    </div>
  );
}

export default App;
