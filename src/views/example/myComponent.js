import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

const MyComponent = (props) => {
  const [listUsers, setListUser] = useState(
    [
      { id: "abcjob1", title: "dev", salary: " 500" },
      { id: "abcjob2", title: "tester", salary: " 400" },
      { id: "abcjob3", title: "Project", salary: " 300" }
    ]
  )
  const addNewJob = (job) => {
    setListUser([...listUsers, job])
  }
  const deleteAJob = (job) => {
    let listUsersJobs = listUsers;
    listUsersJobs = listUsersJobs.filter(item => item.id !== job.id)
    setListUser(listUsersJobs)
  }
  return (
    <>
      <AddComponent
        addNewJob={addNewJob}
      />
      <ChildComponent
        arrJob={listUsers}
        deleteAJob={deleteAJob}
      />
    </>
  )
}
export default MyComponent;
