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
   Version 0.3 2018-03-06T10:53:20
   ..................................................
   - Added title, id, and content headings
   __________________________________________________
 */

import React from 'react';

const Note = (props) => {

  console.log('IN: Note');
  console.log('PROPS: ', props);

  return (
    <div className='Note'>
      <h2>Title: {props.note.title}</h2>
      <h3>Id: {props.note.id}</h3>
      <p>Content: {props.note.contents}</p>
    </div>
  );
}

export default Note;
