/**
   NotesList.js
   ============
   Version 0.3 2018-03-03T18:27:12
   -------------------------------
   Display all notes in a grid pattern;
   import NoteData;
   figure out how to get the note index from a mouse click on a note using
   /HTMLElement.dataset 
 */

import React, { Component } from 'react';
import Note from './Note';
import NoteData from './NoteData';

class NotesList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clicked: '',
    }
  }

  componentWillMount() {
    console.log('Mounting ... NotesList Component');
  }

  componentDidMount() {
    console.log('Entered => NotesList Component');
    console.log('NoteData: ', NoteData);
  }

  clickHandler = (e) => {
    e.preventDefault();
    console.log('EVENT', e);
    console.log('TARGET', e.target);
    console.log('PROPS', this.props);
    console.log('STATE', this.state);
    console.log('DATA', e.target.dataset.index);
  }

  listNotes = (notes) => {
    return (
      <ul className='listNotes'>
        {notes.map((note, index) => {
           return (
             <li key={index} data-index={index} onClick={this.clickHandler}>
               <Note note={note} index={index} />
             </li>
           )})}
      </ul>
    );
  }

  render() {
    return (
      <div className="NotesList">
        <h1>Notes List Component</h1>
        {this.listNotes(NoteData)}
      </div>
    );
  }
}

export default NotesList;
