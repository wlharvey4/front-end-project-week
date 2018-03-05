/**
   App.js
   ======
   Main App Component;
   --------------------------------------------------
   Version 0.4 2018-03-04T17:05:48
   Sending props to a child component from a Route component
   ==> see https://github.com/ReactTraining/react-router/issues/4105
   Added NoteDelete Route;
   Added state attribute started
   __________________________________________________
   Version 0.5 2018-03-05T05:09:38
   Added NotesHeader and NotesNav Components; rearranged; started=false;
   Added NotesContent; factored out Routes into NotesContent;
   __________________________________________________
 */

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NotesHeader from './NotesHeader';
import NotesNav from './NotesNav';
import NotesContent from './NotesContent';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      self: 'App',
      started: false,
    }
  }

  componentWillMount() {
    console.log('Mounting ... App.js');
    console.log('APP PRE STATE: ', this.state);
    console.log('APP PRE PROPS: ', this.props);
    sessionStorage.setItem('started', 'false');
  }

  componentDidMount() {
    console.log('Entered => App.js');
    console.log('APP STATE: ', this.state);
    console.log('APP PROPS: ', this.props);
  }
  
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <NotesHeader id="NotesHeader" />
          <NotesNav id="NotesNav" />
          <NotesContent id="NotesContent" />
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
