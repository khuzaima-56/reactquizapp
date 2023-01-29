import React from 'react'
import './App.css';
import Quiz from './Quiz'
import Questions from './Questions';
function App() {

  return (
      <div className="App">
        <header className="App-header">
          <Quiz qlist = {Questions}/>
        </header>
      </div>
  );
}

export default App;
