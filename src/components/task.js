import React from 'react';
import { observable, decorate, action } from "mobx"

class Task extends React.Component {
  constructor(props) {
  super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
done = this.props.done
name = this.props.name
dueDate = this.props.dueDate
id = this.props.id
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    event.preventDefault();
    console.log(this.props);
  }

  render(){
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
                <input type="checkbox" checked={this.done} />
                <input type="text" value={this.name} placeholder="Add what todo..." />
                DueDate:<input type="date" value={this.dueDate} />
                <input type="hidden" value={this.id} />
                {this.id ?
                <button onClick={this.props.create}>Info</button>
                : <button onClick={this.props.create}>Create</button>
                }
          </form>
        </div>
    )
  }
}
export default Task;

decorate(Task, {
  create: observable,
    done: observable,
    name: observable,
    dueDate: observable,
    id: observable,
})
