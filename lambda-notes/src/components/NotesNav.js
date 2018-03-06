/**
   NotesNav.js
   ===========
   App Main Navigation Component
   --------------------------------------------------
   Version 0.1 2018-03-05T05:11:30
   ..................................................
   - Initial Commit
   __________________________________________________
   Version 0.2 2018-03-05T21:56:07
   ..................................................
   - Called function with props
   __________________________________________________
   Version 0.3 2018-03-06T10:03:33
   ..................................................
   - changed list items into Links
   __________________________________________________
 */

import React from 'react';
import { Link } from 'react-router-dom';

const NotesNav = (props) => {

  console.log(`Entered => ${props.id}`);
  console.log('PROPS: ', props);

  return (
    <div className='NotesNav'>
      <nav className='Nav'>
        <ul className='NotesNav-MenuList'>
          <Link to="/notes/list">List Notes</Link>
          <Link to="/notes/create">Create New Note</Link>
        </ul>
      </nav>
    </div>
  );
}

export default NotesNav;
