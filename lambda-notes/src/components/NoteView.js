/**
   NoteView.js
   ===========
   Version 0.3 2018-03-04T08:53:26
   -------------------------------
   Display a single note;
   Received index from NotesList and setState;
 */

import React, { Component } from 'react';
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
    console.log('mounting ... NoteView Component');
    console.log('PROPS', this.props);
    this.setState(this.props.location.state);
  }

  componentDidMount() {
    console.log('Entered NoteView Component');
    console.log('PROPS', this.props);
  }

  render() {
    return (
      <div className="NoteView">
        <h1>Note View Component</h1>
        <h2>Index: {this.state.index}</h2>
        <Note note={NoteData[this.state.index]} />
      </div>
    );
  }
}

export default NoteView;
