/**
   NotesCheckStarted.js
   ======================
   Method to check that user has started, or redirect to start page
   --------------------------------------------------
   Version 0.1 2018-03-05T06:10:25
   ..................................................
   - Initial Commit
   __________________________________________________
   Version 0.2 2018-03-05T21:49:36
   ..................................................
   - Added console.log
   __________________________________________________
 */

import React from 'react';
import { Redirect } from 'react-router-dom';

const notesCheckStarted = (started, rendercb) => {
  console.log(`Entered NotesCheckStarted => ${started}`);
  if (!started) return (
    <Redirect to='/' />
  );
  return rendercb();
}

export default notesCheckStarted;
