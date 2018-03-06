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
 */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NoteStart from './NoteStart';
import NotesList from './NotesList';
import NoteView from './NoteView';
import NoteCreate from './NoteCreate';
import NoteEdit from './NoteEdit';
import NoteDelete from './NoteDelete';
import NotesHeader from './NotesHeader';
import NotesNav from './NotesNav';
import NotesContent from './NotesContent';

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

        <div className="Content">
          <NotesHeader id="NotesHeader" />
          <NotesNav id="NotesNav" />
          <NotesContent id="NotesContent" />
        </div>

        <div className='Routes'>
          <Route path="/" exact component={NoteStart} />
          {/* <Route path="/notes" exact component={NotesList} /> */}
          <Route path="/notes/list" component={NotesList} />
          <Route path="/notes/view" component={NoteView} />
          <Route path="/notes/create" render={routeProps => <NoteCreate {...routeProps} id="NoteCreate" />} />
          <Route path="/notes/edit" render={routeProps => <NoteEdit {...routeProps} id="NoteEdit" /> } />
          <Route path="/notes/delete" component={NoteDelete} />
        </div>

      </div>

    );
  }
}

export default App;
