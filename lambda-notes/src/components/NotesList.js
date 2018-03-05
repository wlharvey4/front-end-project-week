/**
   NotesList.js
   ============
   Version 0.6 2018-03-04T21:39:44
   -------------------------------
   Display all notes in a grid pattern;
   import NoteData;
   figure out how to get the note index from a mouse click on a note using
   /HTMLElement.dataset;
   changed to using Link with a prop index;
   wrapped Link inside li; added color: black;
   added check for logged in; redirect to root if not
 */

import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Note from './Note';
import NoteData from './NoteData';

class NotesList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      started: false,
    }
  }

  componentWillMount() {
    console.log('Mounting ... NotesList Component');
    const started = "false" !== sessionStorage.getItem('started');
    this.setState({ started });
    console.log('STATE: ', this.state);
  }

  componentDidMount() {
    console.log('Entered => NotesList Component');
    console.log('NoteData: ', NoteData);
    console.log('STATE: ', this.state);
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
    if (this.state.started) return (
      <div className="NotesList">
        <h1>Notes List Component</h1>
        { this.listNotes(NoteData) }  
      </div>
    )
   return (
      <Redirect to="/" />
    );
  }
}

export default NotesList;
