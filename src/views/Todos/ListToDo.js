import React from "react";
import AddToDo from "./AddToDo";
import { toast } from 'react-toastify';

class ListToDo extends React.Component {
  state = {
    ListToDos: [
      { id: "todo1", title: "Doing HomeWork" },
      { id: "todo2", title: "Making Videos" },
      { id: "todo3", title: "Fixing Bugs" },
    ],
    editTodo: {}
  }
  addNewToDo = (job) => {
    this.setState({
      ListToDos: [...this.state.ListToDos, job]
    })
    toast.success("Wow so easy!")
  }

  handleDeleteToDo = (todo) => {
    let curentTodo = this.state.ListToDos
    curentTodo = curentTodo.filter(item => item.id !== todo.id)
    this.setState({
      ListToDos: curentTodo
    })
    toast.success("Delete succed!")
  }

  handelEditTodo = (todo) => {
    let { editTodo, ListToDos } = this.state
    let isEmtyObj = Object.keys(editTodo).length === 0;
    if (isEmtyObj === false && editTodo.id === todo.id) {
      let ListToDosCopy = [...ListToDos]
      let objIndex = ListToDosCopy.findIndex(item => item.id == todo.id);
      ListToDosCopy[objIndex].title = editTodo.title
      this.setState({
        ListToDos: ListToDosCopy,
        editTodo: {}
      })
      toast.success("Update todo succeed!")
      return;
    }
    this.setState({
      editTodo: todo

    })
  }
  handelOnchangeToDo = (event) => {
    let editTodoCopy = { ...this.state.editTodo }
    editTodoCopy.title = event.target.value
    this.setState({
      editTodo: editTodoCopy
    })
  }
  render() {
    let { ListToDos, editTodo } = this.state
    let isEmtyObj = Object.keys(editTodo).length === 0;
    return (
      <div className="list-todo-container">
        <AddToDo
          addNewToDo={this.addNewToDo}
        />
        <div className="list-todo-content">
          {ListToDos && ListToDos.length > 0 &&
            ListToDos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmtyObj === true ?
                    <>
                      <span>{index + 1}-{item.title}</span>
                    </>
                    :
                    <>
                      {editTodo.id === item.id ?
                        <span>
                          {index + 1}-<input
                            onChange={(event) => this.handelOnchangeToDo(event)}
                            value={editTodo.title} />
                        </span>
                        :
                        <span>{index + 1}-{item.title}</span>
                      }
                    </>}
                  <button
                    onClick={() => this.handelEditTodo(item)}
                  >
                    {isEmtyObj === false && editTodo.id === item.id ?
                      "Save" : "Edit"
                    }
                  </button>
                  <button
                    onClick={() => this.handleDeleteToDo(item)}
                  >Delete</button>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default ListToDo