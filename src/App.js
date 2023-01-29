import React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import './App.css';
import Quiz from './Quiz'
import Questions from './Questions';
function App() {

  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <Quiz qlist = {Questions}/>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
