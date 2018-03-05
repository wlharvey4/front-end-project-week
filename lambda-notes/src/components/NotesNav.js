/**
   NotesNav.js
   ===========
   App Main Navigation Component
   --------------------------------------------------
   Version 0.1 2018-03-05T05:11:30
   Initial Commit
   __________________________________________________
 */

import React from 'react';

const NotesNav = () => {

  console.log('Entered NotesNav');

  return (
    <div className='NotesNav'>
      <nav className='Nav'>
        <ul className='NotesNav-MenuList'>
          <li>List Notes</li>
          <li>Create New Note</li>
        </ul>
      </nav>
    </div>
  );
}

export default NotesNav;
