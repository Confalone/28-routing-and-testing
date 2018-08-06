import React, {Component, Fragment} from 'react';


export default class NoteList extends Component {
  render() {
  const {notes} = this.props;   
  console.log(notes);

    return (
      <Fragment>
        <ul>
         {
           notes.map((note, index) => {
             <li key={index}>hello</li>
           })
         }
        </ul>
      </Fragment>
    )
  }
}