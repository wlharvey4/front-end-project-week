/**
   Note.js
   =======
   Displays a single note title and contents
   --------------------------------------------------
   Version 0.1 2018-03-03T18:33:50
   -------------------------------
   - Display a single note
   __________________________________________________
   Version 0.2 2018-03-06T09:27:13
   ..................................................
   - corrected syntax errors
   __________________________________________________
 */

import React from 'react';

const Note = (props) => {

  console.log('IN: Note');
  console.log('PROPS: ', props);

  return (
    <div className='Note'>
      <h2>{props.note.title}</h2>
      <p>{props.note.contents}</p>
    </div>
  );
}

export default Note;
