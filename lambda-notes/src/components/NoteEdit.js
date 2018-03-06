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
   - changed self to id
   __________________________________________________
   Version 0.5 2018-03-05T07:41:12
   - added state.self from props.self;
   - correctly set state.started from sessionStorage
   __________________________________________________
 */

import React, { Component } from 'react';
import NoteCreate from './NoteCreate';

class NoteEdit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      self: this.props.id,
      started: sessionStorage.getItem('started') === 'true',
    }
  }

  render() {
    return (
      <div className="NoteEdit">
        <h1>NoteEdit Component</h1>
        <NoteCreate self={this.state.self} />
      </div>
    );
  }
}

export default NoteEdit;
