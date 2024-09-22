import React, { useState } from "react";

const ChildComponent = (props) => {
  let { arrJob } = props;
  const [isShowHideListUser, setShowHideListUser] = useState(true)
  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser)
  }
  const handleOnclickDelete = (job) => {
    props.deleteAJob(job)
  }
  return (
    <div className="jobList">
      <div>
        <span
          onClick={() => handleShowHideListUser()}
        >
          {isShowHideListUser === true ?
            "Hide list user"
            :
            "Show list user"
          }
        </span>
      </div>
      {
        isShowHideListUser &&
        <>
          {
            arrJob.map((item, index) => {
              return (
                <div key={item.id}>
                  {item.title} - {item.salary}
                  <></> <span onClick={() => handleOnclickDelete(item)}> x </span>
                </div>
              )
            })
          }
        </>
      }
    </div >
  );
}

export default ChildComponent;
