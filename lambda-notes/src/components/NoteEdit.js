/**
   NoteEdit.js
   ===========
   Component to Edit a Note
   --------------------------------------------------
   Version 0.3 2018-03-04T12:05:29
   Using Composition
   ==> see https://reactjs.org/docs/composition-vs-inheritance.html
   __________________________________________________
   Version 0.4 2018-03-05T05:48:32
   Changed self to id
   __________________________________________________
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
        <NoteCreate self={this.props.id} />
      </div>
    );
  }
}

export default NoteEdit;
