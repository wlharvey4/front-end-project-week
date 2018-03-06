/**
   NotesContent.js
   ===============
   Main Content Component
   --------------------------------------------------
   Version 0.1 2018-03-05T05:24:42
   ..................................................
   Initial Commit
   __________________________________________________
   Version 0.2 2018-03-05T20:12:04
   ..................................................
   Moved Routes back into App
   __________________________________________________
 */

import React from 'react';

const NotesContent = (props) => {

  console.log(`Entered => ${props.id}`);
  console.log('PROPS: ', props);

  return (
    <h1>Notes Content</h1>
  );
}

export default NotesContent;
