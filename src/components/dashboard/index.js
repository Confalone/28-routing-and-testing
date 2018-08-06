import React, {Component, Fragment} from 'react';
import uuidv1 from 'uuid/v1';

import NoteCreateForm from '../note-create-form';
import NoteList from '../note-list';


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      content: '',
      title:'',
    }
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addNote(note) {
    note.id = uuidv1(),
    note.editing = false,
    note.completed = false,
    note.title = this.state.title,
    note.content = this.state.content,

    console.log(note);

    this.setState({
      notes: [...this.state.notes, note],
    })
  }

  handleContentChange(event) {
    this.setState({content: event.target.value});
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  removeNote(note) {
    this.setState({
      notes: this.state.notes.filter(noteToDelete => noteToDelete.id !== note.id) 
      })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addNote(this.state);
    this.setState({
      title: '',
      content: '',
    })
  }

  render() {
    console.log(this.state, 'state');
    return (
      <Fragment>
      <h1>Dashboard</h1>
      <NoteCreateForm 
        onComplete={this.handleSubmit}
        handleContentChange={this.handleContentChange}
        handleTitleChange={this.handleTitleChange}
      />
      <NoteList 
        notes={this.state.notes}
      />
      </Fragment>
    );
  }


}