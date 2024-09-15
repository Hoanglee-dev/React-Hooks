import React from "react";

/** StateLess/StateFull */

class ChildComponent extends React.Component {
  /* 
  JSX: giúp js trả ra 1 đống html
  <></>: trường hợp muốn render 2 cái div mà không cần div cha bọc bên ngoài thì dùng <></> (shortcut của <React.Fragment></React.Fragment>)
  state: bản chất của nó là khi thay đổi dữ liệu, không cần reload lại page 
  */
  state = {
    showJob: false
  }
  handleShowHide = () => {
    this.setState({
      showJob: !this.state.showJob
    })
  }
  render() {
    let { arrJob } = this.props;
    let { showJob } = this.state
    let check = showJob === true ? "showJob = true" : "showJob - false"
    console.log("check", check)
    return (
      <>
        {showJob === false ?
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
          :
          <>
            <div className="jobList">
              {
                arrJob.map((item, index) => {
                  return (
                    <div key={item.id}>
                      {item.title} - {item.salary}
                    </div>
                  )
                })
              }
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        }
      </>
    );
  }
}
// const ChildComponent = (props) => {
//   let { arrJob } = props;
//   return (
//     <>
//       <div className="jobList">
//         {
//           arrJob.map((item, index) => {
//             if (item.salary >= 500) {
//               return (
//                 <div key={item.id}>
//                   {item.title} - {item.salary}$
//                 </div>
//               )
//             }
//           })
//         }
//       </div>
//     </>
//   );
// }
export default ChildComponent;
