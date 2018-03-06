/**
   NoteStart.js
   ============
   - Display the initial start page with start button;
   -------------------------------------------------
   Version 0.2 2018-03-04T07:39:01
   ..................................................
   - Use Link instead of Button's clickHandler
   _________________________________________________
   Version 0.3 2018-03-05T05:06:08
   ..................................................
   - Factored out the main header component
   _________________________________________________
   Version 0.4 2018-03-05T21:46:24
   ..................................................
   - Changed functional component to class component;
   - click handler from button sets started true
   __________________________________________________
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoteStart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      self: 'NoteStart',
      started: sessionStorage.getItem('started') === 'true',
    }
  }

  componentWillMount() {
    console.log('Mounting ... NoteStart');
    console.log('STATE: ', this.state);
    console.log('PROPS: ', this.props);
  }

  componentDidMount() {
    console.log('Entered => NoteStart');
    console.log('STATE: ', this.state);
    console.log('PROPS: ', this.props);
  }

  clickHandler = (e) => {
    console.log('NoteStart clickHandler activated');
   
    sessionStorage.setItem('started', 'true');
    this.setState({ started: true });

    console.log(`STARTED: ${sessionStorage.getItem('started')}`);
  }

  render() {
    return (
      <div className='NoteStart'>

        <p className='App-intro'>
          Click the Start button to enter Lambda Notes
        </p>

        <Link to="/notes/list">
          <button type="button" name="Lambda Notes" autoFocus onClick={this.clickHandler}>
            Start Lambda Notes
          </button>
        </Link>

      </div>
    );
  }
}

export default NoteStart;
