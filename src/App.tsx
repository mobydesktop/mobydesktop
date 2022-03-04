import React, { useState } from 'react';
import MobyLogo from "./assets/images/moby.svg"
import './App.css';
import Desktop from './desktop';

function App() {
  const [preview, showPreview] = useState(false)
  if (!preview) {
    return <div className="App">
      <header className="App-header">
        <img src={MobyLogo} className="App-logo" alt="logo" />
        <h1><span>moby</span>desktop</h1>
        <h2>an open-source GUI for docker</h2>
        <p><a className="App-link" href="#" onClick={() => showPreview(true)}>Preview Application</a></p>
      </header>
    </div>
  }

  return <Desktop />
}

export default App;
