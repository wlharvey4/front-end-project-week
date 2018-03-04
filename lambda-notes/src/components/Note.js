/**
   Note.js
   =======
   Version 0.1 2018-03-03T18:33:50
   -------------------------------
   Display a single note
 */

import React from 'react';

const Note = (props) => {

  console.log('IN: Note');
  console.log('PROPS: ', props);

  return (
    <div className='Note'>
      <h2>props.note.title</h2>
      <p>propse.note.content</p>
    </div>
  );
}

export default Note;
