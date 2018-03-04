/**
   NotesList.js
   ============
   Version 0.4 2018-03-04T08:05:14
   -------------------------------
   Display all notes in a grid pattern;
   import NoteData;
   figure out how to get the note index from a mouse click on a note using
   /HTMLElement.dataset;
   changed to using Link with a prop index;
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <ul className='listNotes'> {
        notes.map((note, index) => {
          return (
            <Link to={{ pathname:"/notes/view", state:{index} }}
                  key={index}
                  style={{ textDecoration: 'none' }}
              >
              <li> <Note note={note} index={index} /> </li>
            </Link>
          )
        })
      }
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
