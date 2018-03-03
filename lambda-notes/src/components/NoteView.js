/**
   NoteView.js
   ===========
   Version 0.2 2018-03-03T11:40:26
   -------------------------------
   Display a single note
 */

import React, { Component } from 'react';

class NoteView extends Component {

  componentWillMount() {
    console.log('mounting ... NoteView Component');
  }

  componentDidMount() {
    console.log('Entered NoteView Component');
  }

  render() {
    return (
      <h1>Note View Component</h1>
    );
  }
}

export default NoteView;
