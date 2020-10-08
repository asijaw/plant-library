import React, { Component } from 'react';
import { addNote } from '../../actions/progressNotesActions'
import { connect } from 'react-redux'

class ProgressForm extends Component {

state = {
    text: ''
}

  handleOnChange = (event) =>{
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit = (event) => {

    event.preventDefault();
    this.props.addNote({text: this.state.text, plant_id: this.props.plantId });
    this.setState({
      text: '',
    });
  }

  render() {
    //console.log(this.state.text)
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <label>Add Progress Note</label>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default connect(null, { addNote })(ProgressForm);
