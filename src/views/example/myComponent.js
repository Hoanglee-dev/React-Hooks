import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  /* 
  JSX: giúp js trả ra 1 đống html
  <></>: trường hợp muốn render 2 cái div mà không cần div cha bọc bên ngoài thì dùng <></> (shortcut của <React.Fragment></React.Fragment>)
  state: bản chất của nó là khi thay đổi dữ liệu, không cần reload lại page 
  */
  state = {
    arrJob: [
      { id: "abcjob1", title: "dev", salary: " 500" },
      { id: "abcjob2", title: "tester", salary: " 400" },
      { id: "abcjob3", title: "Project", salary: " 300" }
    ]
  };

  addNewJob = (job) => {
    console.log("check data", job)
    this.setState({
      arrJob: [...this.state.arrJob, job]
    })
  }

  render() {
    return (
      <>
        <AddComponent
          addNewJob={this.addNewJob}
        />
        <ChildComponent
          arrJob={this.state.arrJob}
        />
      </>
    );
  }
}

export default MyComponent;
