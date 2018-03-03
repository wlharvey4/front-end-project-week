/**
   NoteStart.js
   ============
   Version 0.1 2018-03-03T11:12:26
   -------------------------------
   Display the initial start page with start button
 */

import React from 'react';

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
      <button
        type="button"
        name="Lambda Notes"
        onClick={() => { alert('You Clicked Lambda Notes') }}
        autoFocus
      >
        Enter Lambda Notes
      </button>
    </div>
  );
}

export default NoteStart;
