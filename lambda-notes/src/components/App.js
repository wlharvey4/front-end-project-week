/**
   App.js
   ======
   Version 0.2 2018-03-03T13:34:56
   -------------------------------
   Main App Component;
   Sending props to a child component from a Route component
   ==> see https://github.com/ReactTraining/react-router/issues/4105
 */

import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import NoteStart from './NoteStart';
import NotesList from './NotesList';
import NoteView from './NoteView';
import NoteCreate from './NoteCreate';
import NoteEdit from './NoteEdit';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      self: 'App',
    }
  }

  componentWillMount() {
    console.log('Mounting ... App.js');
    console.log('STATE: ', this.state);
  }

  componentDidMount() {
    console.log('Entered => App.js');
    console.log('STATE: ', this.state);
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={NoteStart} />
          <Route path="/notes" exact component={NotesList} />
          <Route path="/notes/list" component={NotesList} />
          <Route path="/notes/view" component={NoteView} />
          <Route path="/notes/create" render={routeProps => <NoteCreate {...routeProps} self="NoteCreate" />} />
          <Route path="/notes/edit" render={routeProps => <NoteEdit {...routeProps} self="NoteEdit" /> } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
