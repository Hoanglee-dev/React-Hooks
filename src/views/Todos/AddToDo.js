import React from "react";

class AddToDo extends React.Component {
  state = {
    title: "",
  }
  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleAddToDo = () => {
    if (!this.state.title) {
      alert("missing title")
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 100),
      title: this.state.title
    }
    this.props.addNewToDo(todo)
    this.setState({
      title: "",
    })
  }

  render() {
    let { title } = this.state;
    return (
      <div className="Add-todo">
        <input type="text"
          onChange={(event) => this.handleOnChangeTitle(event)}
          value={title}></input>
        <button
          type="button"
          onClick={() => this.handleAddToDo()}
        >Add</button>
      </div>
    )
  }
}

export default AddToDo