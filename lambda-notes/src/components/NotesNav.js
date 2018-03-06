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
 */

import React from 'react';

const NotesNav = (props) => {

  console.log(`Entered => ${props.id}`);
  console.log('PROPS: ', props);

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
