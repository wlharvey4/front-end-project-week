/**
   NotesList.js
   ============
   Version 0.2 2018-03-03T12:17:17
   -------------------------------
   Display all notes in a grid pattern
 */

import React, { Component } from 'react';

class NotesList extends Component {

  componentDidMount() {
    console.log('Entered => NotesList Component');
  }

  render() {
    return (
      <h1>Notes List Component</h1>
    );
  }
}

export default NotesList;
