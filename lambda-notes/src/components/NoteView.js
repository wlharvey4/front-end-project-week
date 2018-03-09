/**
   NoteView.js
   ===========
   Displays the contents of a picked note
   --------------------------------------------------
   Version 0.4 2018-03-04T09:56:59
   -------------------------------
   - Display a single note;
   - Received index from NotesList and setState;
   __________________________________________________
   Version 0.5 2018-03-06T09:12:15
   - added main note view
   __________________________________________________
   Version 0.6 2018-03-09T05:57:37
   - Added state to Edit link
   __________________________________________________
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NotesMain from './NotesMain';
import Note from './Note';
import NoteData from './NoteData';

class NoteView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: -1,
    };
  }

  componentWillMount() {
    console.log('Mounting ... NoteView Component');
    console.log('STATE: ', this.state);
    console.log('PROPS', this.props);

    this.setState(this.props.location.state);
  }

  componentDidMount() {
    console.log('Entered => NoteView Component');
    console.log('STATE: ', this.state);
    console.log('PROPS: ', this.props);
  }

  render() {
    return (
      <div className="NoteView">

        <NotesMain id="NotesMain" />

        <h1>Note View Component</h1>

        <Link to={{
          pathname: "/notes/edit",
          state: this.state.index,
        }} >Edit </Link>
        <Link to={{
          pathname:"/notes/delete",
          state:this.state.index,
        }} >Delete </Link>

        <h2>Index: {this.state.index}</h2>

        <Note note={NoteData[this.state.index]} />

      </div>
    );
  }
}

export default NoteView;
