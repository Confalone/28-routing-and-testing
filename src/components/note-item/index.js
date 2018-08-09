import React, { Component, Fragment } from 'react';

export default class NoteItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      this.props.notes.map(note => (
        <li key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button id={note.id} onClick={this.props.removeNote}>Delete</button>
          
        </li>)));
  }
}