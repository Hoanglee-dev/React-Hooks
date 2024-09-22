import React, { useState } from "react"
const AddComponent = (props) => {
  const [title, setTitle] = useState("")
  const [salary, setSalary] = useState("")
  const handleChangeTitleJob = (event) => {
    setTitle(event.target.value)
  }
  const handleChangeSalary = (event) => {
    setSalary(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNewJob({
      id: Math.floor(Math.random() * 100),
      title: title,
      salary: salary,
    })
    setTitle("")
    setSalary("")
  }
  return (
    <>
      <form >
        <label htmlFor="fname">Title</label><br />
        <input
          type="text"
          value={title}
          onChange={(event) => handleChangeTitleJob(event)}
        /><br />
        <label htmlFor="lname">salary</label><br />
        <input
          type="text"
          value={salary}
          onChange={(event) => handleChangeSalary(event)}
        /><br /><br />
        <input type="submit"
          value="Submit"
          onClick={(event) => handleSubmit(event)}
        />
      </form>
    </>
  )
}
export default AddComponent