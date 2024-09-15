import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  /* 
  JSX: giúp js trả ra 1 đống html
  <></>: trường hợp muốn render 2 cái div mà không cần div cha bọc bên ngoài thì dùng <></> (shortcut của <React.Fragment></React.Fragment>)
  state: bản chất của nó là khi thay đổi dữ liệu, không cần reload lại page 
  */
  state = {
    firstName: "",
    lastName: "",
    arrJob: [
      { id: "abcjob1", title: "dev", salary: " 500" },
      { id: "abcjob2", title: "tester", salary: " 400" },
      { id: "abcjob3", title: "Project", salary: " 300" }
    ]
  };


  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    })
  }
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log("check data state", this.state)
  }
  render() {
    return (
      <>
        <form >
          <label htmlFor="fname">First name:</label><br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          /><br />
          <label htmlFor="lname">Last name:</label><br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          /><br /><br />
          <input type="submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
        <ChildComponent
          name={this.state.firstName}
          age={"24"}
          address={"DaNang"}
          arrJob={this.state.arrJob}
        />
      </>
    );
  }
}

export default MyComponent;
