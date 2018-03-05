/**
   NotesList.js
   ============
   Component to Display all notes in a grid pattern;
   --------------------------------------------------
   Version 0.6 2018-03-04T21:39:44
   ...............................
   - import NoteData;
   - figure out how to get the note index from a
     mouse click on a note using
     /HTMLElement.dataset;
   - changed to using Link with a prop index;
   - wrapped Link inside li; added color: black;
   - added check for logged in; redirect to root if
     not
   __________________________________________________
   Version 0.7 2018-03-05T05:52:15
   ...............................
   -Refactored Comments; add self; refactored render
    for added clarity;
   -refactored listNotes; moved ul into render;
   -added NotesCheckStarted method;
   __________________________________________________
 */

import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Note from './Note';
import NoteData from './NoteData';
import notesCheckStarted from './NotesCheckStarted';

class NotesList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      self: 'NotesList',
      started: false,
    }
  }

  componentWillMount() {
    console.log(`Mounting ... ${this.state.self} Component`);
    console.log('STATE: ', this.state);

    this.setState({ started: sessionStorage.getItem('started') === 'true' });
  }

  componentDidMount() {
    console.log(`Entered => ${this.started.self} Component`);
    console.log('NoteData: ', NoteData);
    console.log('STATE: ', this.state);
  }

  listNotes = (notes) => {
    return (
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
    );
  }

  render() {

    return notesCheckStarted(this.state.started, () => {
      return (
        <div className="NotesList">

          <article className="ListOfNotes">
            <h1>Notes List Component</h1>
            <ul className="listOfNotes">
              { this.listNotes(NoteData) }
            </ul>
          </article>

        </div>
      );
    });
  }
}

export default NotesList;
