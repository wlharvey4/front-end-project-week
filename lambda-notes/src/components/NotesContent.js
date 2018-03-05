/**
   NotesContent.js
   ===============
   Main Content Component
   --------------------------------------------------
   Version 0.1 2018-03-05T05:24:42
   Initial Commit
   __________________________________________________
 */

import React from 'react';
import { Route } from 'react-router-dom';

import NoteStart from './NoteStart';
import NotesList from './NotesList';
import NoteView from './NoteView';
import NoteCreate from './NoteCreate';
import NoteEdit from './NoteEdit';
import NoteDelete from './NoteDelete';

const NotesContent = () => {

  console.log('Entered => MainContent');

  return (
    <div className='MainContent'>
      <Route path="/" exact component={NoteStart} />
      <Route path="/notes" exact component={NotesList} />
      <Route path="/notes/list" component={NotesList} />
      <Route path="/notes/view" component={NoteView} />
      <Route path="/notes/create" render={routeProps => <NoteCreate {...routeProps} self="NoteCreate" />} />
      <Route path="/notes/edit" render={routeProps => <NoteEdit {...routeProps} self="NoteEdit" /> } />
      <Route path="/notes/delete" component={NoteDelete} />
    </div>
  );
}

export default NotesContent;
