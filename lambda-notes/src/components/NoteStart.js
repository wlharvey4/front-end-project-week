/**
   NoteStart.js
   ============
   Display the initial start page with start button;
   -------------------------------------------------
   Version 0.2 2018-03-04T07:39:01
   Use Link instead of Button's clickHandler
   _________________________________________________
   Version 0.3 2018-03-05T05:06:08
   Factored out the main header component
   _________________________________________________
 */

import React from 'react';
import { Link } from 'react-router-dom';

const NoteStart = () => {
  console.log('Entered => NoteStart');

  return (
    <div className='NoteStart'>

      <p className='App-intro'>
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
