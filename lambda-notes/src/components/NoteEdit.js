/**
   NoteEdit.js
   ===========
   Version 0.2 2018-03-03T13:39:51
   -------------------------------
   Edit a Note
   Using Composition
   ==> see https://reactjs.org/docs/composition-vs-inheritance.html
 */

import React, { Component } from 'react';
import NoteCreate from './NoteCreate';

class NoteEdit extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NoteCreate self={this.props.self} />
    );
  }
}

export default NoteEdit;
