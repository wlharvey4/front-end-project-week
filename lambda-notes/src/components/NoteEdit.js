/**
   NoteEdit.js
   ===========
   Version 0.3 2018-03-04T12:05:29
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
      <div className="NoteEdit">
        <h1>NoteEdit Component</h1>
        <NoteCreate self={this.props.self} />
      </div>
    );
  }
}

export default NoteEdit;
