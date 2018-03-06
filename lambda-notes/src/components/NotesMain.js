/**
   NotesMain.js
   ============
   Main Note App View, composed of Header, Nav, and
   Content components
   --------------------------------------------------
   Version 0.1 2018-03-06T08:25:50
   ..................................................
   - Initial commit
   __________________________________________________
 */

import React from 'react';

import NotesHeader from './NotesHeader';
import NotesNav from './NotesNav';
import NotesContent from './NotesContent';

const NotesMain = (props) => {

  console.log('Entered => NoteMain');
  console.log('PROPS: ', props);

  return (
    <div className="NoteMain">
      <NotesHeader  id="NotesHeader"  />
      <NotesNav     id="NotesNav"     />
      <NotesContent id="NotesContent" />
    </div>
  );
}

export default NotesMain;
