/**
   NotesHeader.js
   ==============
   Main Header Component for Lambda Notes App
   ------------------------------------------
   Version 0.1 2018-03-05T04:44:47
   ..................................................
   - Initial Commit
   ___________________________________________
   Version 0.2 2018-03-05T21:54:49
   ..................................................
   - called function with props
   __________________________________________________
 */

import React from 'react';

const NotesHeader = (props) => {
  console.log(`Entered => ${props.id}`);
  console.log('PROPS: ', props);

  const started = sessionStorage.getItem('started') === 'true';
  console.log(`started: ${started}`);
  const welcome = !started ? 'Welcome to ' : '';

  return (
    <div className ="NotesHeader">

      <header className="App-header">
        <h1 className="App-title">
          {welcome}Lambda Notes
        </h1>
      </header>

    </div>
  );
}

export default NotesHeader;
