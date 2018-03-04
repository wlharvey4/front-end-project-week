/**
   NoteStart.js
   ============
   Version 0.2 2018-03-04T07:39:01
   -------------------------------
   Display the initial start page with start button;
   Use Link instead of Button's clickHandler
 */

import React from 'react';
import { Link } from 'react-router-dom';

const NoteStart = () => {
  console.log('Entered => Note Start');

  return (
    <div className ="NoteStart">

      <header className="App-header">
        <h1 className="App-title">Welcome to Lambda Notes</h1>
      </header>

      <p className="App-intro">
        Click the Start button to enter Lambda Notes
      </p>

      <Link to="/notes">
        <button type="button" name="Lambda Notes" autoFocus>
          Start Lambda Notes
        </button>
      </Link>

    </div>
  );
}

export default NoteStart;
