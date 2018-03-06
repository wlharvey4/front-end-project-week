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
   Version 0.8 2018-03-05T08:05:55
   ..................................................
   - Removed Redirect from import;
   - refactored state.started to check sessionStorage
   - call NotesCheckStarted with state.started;
   - console.logged props
   __________________________________________________
   Version 0.9 2018-03-06T09:08:10
   ..................................................
   - Added new component NotesMain
   __________________________________________________
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NotesMain from './NotesMain';
import Note from './Note';
import NoteData from './NoteData';
import notesCheckStarted from './NotesCheckStarted';

class NotesList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      self: 'NotesList',
      started: sessionStorage.getItem('started') === 'true',
    }
  }

  componentWillMount() {
    console.log(`Mounting ... ${this.state.self} Component`);
    console.log('STATE: ', this.state);
    console.log('PROPS: ', this.props);
    console.log('STARTED: ', sessionStorage.getItem('started'));
  }

  componentDidMount() {
    console.log(`Entered => ${this.state.self} Component`);
    console.log('NoteData: ', NoteData);
    console.log('STATE: ', this.state);
    console.log('PROPS: ', this.props);
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

          <NotesMain id="NotesMain" />

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
