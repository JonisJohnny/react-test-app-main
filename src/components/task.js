import React from 'react';

class Task extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render(){
    return (
        <div>
          <form>
                <input type="checkbox" checked={this.props.done} />
                <input type="text" value={this.props.name} placeholder="Add what todo..." />
                DueDate:<input type="date" value={props.dueDate} />
                <input type="hidden" value={props.id} />
                {props.id ?
                <button onClick={props.info}>Info</button>
                : <button onClick={props.create}>Create</button>
                }
          </form>
        </div>
    )
  }
}
export default Task;