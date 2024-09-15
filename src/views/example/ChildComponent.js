import React from "react";

// class ChildComponent extends React.Component {
//   /* 
//   JSX: giúp js trả ra 1 đống html
//   <></>: trường hợp muốn render 2 cái div mà không cần div cha bọc bên ngoài thì dùng <></> (shortcut của <React.Fragment></React.Fragment>)
//   state: bản chất của nó là khi thay đổi dữ liệu, không cần reload lại page 
//   */
//   render() {
//     console.log(">>check props:", this.props)
//     let { name, age, address, arrJob } = this.props;
//     return (
//       <>
//         <div className="jobList">
//           {
//             arrJob.map((item, index) => {
//               return (
//                 <div key={item.id}>
//                   {item.title} - {item.salary}
//                 </div>
//               )
//             })
//           }
//         </div>
//       </>
//     );
//   }
// }
const ChildComponent = (props) => {
  let { arrJob } = props;
  return (
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
    </>
  );
}
export default ChildComponent;
