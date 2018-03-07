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
   Version 0.6 2018-03-07T06:05:47
   ..................................................
   - added some console.logs to component state;
   - changed title to use state;
   - added createNoteForm method;
   __________________________________________________
 */

import React, { Component } from 'react';

import NotesMain from './NotesMain';
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
    console.log(`Mounting ... ${this.props.id} Component`);
    console.log('PRE PROPS: ', this.props);
    console.log('PRE STATE: ', this.state);

    this.setState({ self: this.props.id });
    this.setState({ title: this.props.id });
  }

  componentDidMount() {
    console.log(`Entered => ${this.state.self} Component`);
    console.log('PROPS: ', this.props);
    console.log('STATE: ', this.state);
  }

  createNoteForm = () => {
    return (
      <div className="createNoteForm">
        <h3>Form Goes Here</h3>
        <form className="NoteCreateForm">
          <div className="CreateNoteTitle">
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" title="Title" defaultValue="Default Title" />
          </div>
          <div className="CreateNoteContent">
            <label htmlFor="content">Content: </label>
            <textarea type="text" id="content" title="Content" defaultValue="Default content...">
            </textarea>
          </div>
        </form>
      </div>
    );
  }

  render() {
    return notesCheckStarted(this.state.started, () => {
      return (
        <div className="NoteCreate">
          <NotesMain id={this.state.self} />
          <h1>{this.state.title}</h1>
          {this.createNoteForm()}
        </div>
      );
    });
  }
}

export default NoteCreate;
