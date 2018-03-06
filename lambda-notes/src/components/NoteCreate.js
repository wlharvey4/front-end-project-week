/**
   NoteCreate.js
   =============
   Component to Create a new note;
   --------------------------------------------------
   Version 0.2 2018-03-03T13:37:57
   ..................................................
   - Allow for Composition by NoteEdit
     ==> see
     https://reactjs.org/docs/composition-vs-inheritance.html
   __________________________________________________
   Version 0.3 2018-03-05T05:46:59
   ..................................................
   - Changed self to id; added title with default
     value
   __________________________________________________
   Version 0.4 2018-03-05T06:40:34
   ..................................................
   - Added state.started; added NotesCheckStarted; 
   __________________________________________________
   Version 0.5 2018-03-05T22:01:06
   ..................................................
   - correctly set state.started by looking to
     sessionStorage;
   - changed instances of id to self
   __________________________________________________
 */

import React, { Component } from 'react';

import notesCheckStarted from './NotesCheckStarted';

class NoteCreate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      self: this.props.self,
      title: '',
      started: sessionStorage.getItem('started') === 'true',
    }
  }

  componentWillMount() {
    console.log(`Mounting ... ${this.state.self} Component`);
    this.setState({ title: this.props.self });
  }

  componentDidMount() {
    console.log(`Entered => ${this.state.self} Component`);
  }

  render() {
    return notesCheckStarted(this.state.started, () => {
      return (
        <div className="NoteCreate">
          <h1>{this.state.title}</h1>
        </div>
      );
    });
  }
}

export default NoteCreate;
