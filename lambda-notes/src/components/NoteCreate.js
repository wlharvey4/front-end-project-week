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
   Version 0.7 2018-03-09T06:02:21
   ..................................................
   - refactored Form based upon some learning;
   - refactored state to take account of what kind of
     component is calling, Create or Edit;
   - refactored state submit to be either Create or
     Edit
   __________________________________________________
 */

import React, { Component } from 'react';
import randomTitle from 'random-title';
import randomParagraph from 'random-paragraph';

import NotesMain from './NotesMain';
import NoteData from './NoteData';
import notesCheckStarted from './NotesCheckStarted';

class NoteCreate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      self: this.props.self,
      title: '',
      started: sessionStorage.getItem('started') === 'true',
      noteTitle: '',
      noteContent: '',
      submit: '',
    }
  }
  
  componentWillMount() {
    console.log(`Mounting ... ${this.props.self} Component`);
    console.log('PRE PROPS: ', this.props);
    console.log('PRE STATE: ', this.state);

    this.setState({
      title: this.props.self.replace(/Note/, ''),
      index: this.props.index,
      noteTitle: this.props.self.search(/Create/) ?
                 randomTitle() :
                 NoteData[this.props.index].title,
      noteContent: this.props.self.search(/Create/) ?
                   randomParagraph() :
                   NoteData[this.props.index].contents,
      submit: this.props.self.includes('Create') ? 'Create' : 'Edit',
    });
  }

  componentDidMount() {
    console.log(`Entered => ${this.state.self} Component`);
    console.log('PROPS: ', this.props);
    console.log('STATE: ', this.state);
  }

  titleChangeHandler = (e) => {
    this.setState({ noteTitle: e.target.value });
  }
  contentChangeHandler = (e) => {
    this.setState({ content: e.target.value });
  }
  titleSubmitted = (e) => {
    e.preventDefault();
    console.log(`Title submitted ${e.target.value}`);
  }
  contentSubmitted = (e) => {
    e.preventDefault();
    console.log(`Content submitted: ${e.target.value}`);
  }

  createNoteForm = () => {
    return (
      <div className="CreateNoteForm">
        <h3>Form Goes Here</h3>
        <form className="NoteForm" onSubmit={this.contentSubmitted}>
          <div className="CreateNoteTitle">
            <label>Note Title:
              <input
                className="NoteTitleInput"
                type="text"
                id="noteTitle"
                title="NoteTitle"
                placeholder="Title..."
                autoFocus
                value={this.state.noteTitle}
                onChange={this.titleChangeHandler}
              />
            </label>
          </div>
          <div className="CreateNoteContent">
            <label>Content:
              <textarea
                className="NoteContentTextarea"
                type="text"
                id="noteContent"
                placeholder="Content..."
                value={this.state.noteContent}
                onChange={this.contentChangeHandler}
                onSubmit={this.contentSubmitted}
              >
              </textarea>
            </label>
          </div>
          <div className="SubmitButton">
            <input type="submit"
                   value={this.state.submit}
            />
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
