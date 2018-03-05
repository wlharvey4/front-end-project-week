/**
   NotesList.js
   ============
   Version 0.5 2018-03-04T16:34:17
   -------------------------------
   Display all notes in a grid pattern;
   import NoteData;
   figure out how to get the note index from a mouse click on a note using
   /HTMLElement.dataset;
   changed to using Link with a prop index;
   wrapped Link inside li; added color: black
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

  listNotes = (notes) => {
    return (
      <ul className='listNotes'> {
        notes.map((note, index) => {
          return (
            <li key={index}>
              <Link
                to={{
                  pathname:"/notes/view",
                  state:{index}
                }}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                <Note note={note} index={index} />
              </Link>
            </li>
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
