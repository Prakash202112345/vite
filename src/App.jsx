import React from 'react';
import Card from './components/Card'
import './App.css';

function App() {
  return (
    <main>
     <Card CardHeader="I am header" CardBody="I am footer" CardFooter="I am footer"/>
    </main>
  );
}

export default App;