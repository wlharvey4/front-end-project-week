/**
   App.js
   ======
   Version 0.4 2018-03-04T17:05:48
   -------------------------------
   Main App Component;
   Sending props to a child component from a Route component
   ==> see https://github.com/ReactTraining/react-router/issues/4105
   Added NoteDelete Route;
   Added state attribute started
 */

import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import NoteStart from './NoteStart';
import NotesList from './NotesList';
import NoteView from './NoteView';
import NoteCreate from './NoteCreate';
import NoteEdit from './NoteEdit';
import NoteDelete from './NoteDelete';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      self: 'App',
      started: '',
    }
  }

  componentWillMount() {
    console.log('Mounting ... App.js');
    console.log('STATE: ', this.state);
    console.log('PROPS: ', this.props);
    sessionStorage.setItem('started', 'false');
    this.setState({ started: false });
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
          <Route path="/notes/delete" component={NoteDelete} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
