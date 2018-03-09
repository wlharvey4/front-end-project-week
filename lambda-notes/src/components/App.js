/**
   App.js
   ======
   Main App Component;
   --------------------------------------------------
   Version 0.4 2018-03-04T17:05:48
   ..................................................
   - sending props to a child component from a Route
     component ==> see
     https://github.com/ReactTraining/react-router/issues/4105
   - added NoteDelete Route;
   - added state attribute started
   __________________________________________________
   Version 0.5 2018-03-05T05:09:38
   ..................................................
   - Added NotesHeader and NotesNav Components;
     rearranged; started=false;
   - Added NotesContent; factored out Routes into
     NotesContent;
   __________________________________________________
   Version 0.6 2018-03-05T07:47:24
   ..................................................
   - removed Route from import;
   - reformatted comments
   __________________________________________________
   Version 0.7 2018-03-05T20:15:45
   ..................................................
   - returned Routes to App;
   - moved Router to index.js
   - set state.started correctly by looking to
     sessionStorage; App now correctly redirects to
     / when not 'logged in';
   __________________________________________________
   Version 0.8 2018-03-06T08:04:06
   ..................................................
   - changed base route to /notes
   - factored out main note view into NoteMain
   __________________________________________________
   Version 0.9 2018-03-09T06:12:02
   ..................................................
   - changed id to self in NoteCreate and NoteEdit
   __________________________________________________
 */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NoteStart from './NoteStart';
import NotesList from './NotesList';
import NoteView from './NoteView';
import NoteCreate from './NoteCreate';
import NoteEdit from './NoteEdit';
import NoteDelete from './NoteDelete';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      self: 'App',
      started: sessionStorage.getItem('started') === 'true',
    }
  }

  componentWillMount() {
    console.log('Mounting ... App.js');
    console.log('APP PRE STATE: ', this.state);
    console.log('APP PRE PROPS: ', this.props);
  }

  componentDidMount() {
    console.log('Entered => App.js');
    console.log('APP STATE: ', this.state);
    console.log('APP PROPS: ', this.props);
  }
  
  render() {

    return (
      <div className="App">

        <div className='Routes'>
          <Route path="/notes" exact  component={NoteStart} />
          <Route path="/notes/list"   component={NotesList} />
          <Route path="/notes/view"   component={NoteView} />
          <Route path="/notes/create"
                 render={routeProps =>
                   <NoteCreate {...routeProps} self="NoteCreate" />}
          />
          <Route path="/notes/edit"
                 render={routeProps =>
                   <NoteEdit {...routeProps} self="NoteEdit" /> }
          />
          <Route path="/notes/delete" component={NoteDelete} />
        </div>

      </div>

    );
  }
}

export default App;
