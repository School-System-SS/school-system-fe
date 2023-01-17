
export default function TableAssignmentListOfTeacher(props) {
  return (<section className="h-[500px] overflow-scroll mt-[2%] ml-[30%]">
    <div><div >
      <table className="text-center shadow-lg w-4 border-collapse min-w-[750px]">
  <tr className="sticky top-0  w-4 bg-lighter">
    <th className="text-center w-4 rounded-tl-2xl text-white bg-blue-100 border text-left px-8 py-4">Student</th>
    <th className="text-center w-4 text-white bg-blue-100 border text-left px-8 py-4">Assignment</th>
    <th className="text-center w-4 text-white bg-blue-100 border text-left px-8 py-4">Grade</th>
    <th className=" text-center w-4 rounded-tr-2xl text-white bg-blue-100 border text-left px-8 py-4">Action</th>

  </tr>
                {props.SelectedAssignmentTeacher.studentInfoGenral.map(item => {
                  return (
  <tr className="w-4 hover:bg-[#9287af]">
    <td className="hover:bg-[#9287af] border w-4 px-8 py-4"> {item.studentName}</td>
    <td className="hover:bg-[#9287af] border w-4 px-8 py-4"> {item.path}</td>
    <td className="hover:bg-[#9287af] border w-4 px-8 py-4"> {item.grade}</td>
    <td className="hover:bg-[#9287af] border w-4 px-8 py-4"> <button className="bg-lighter py-2 px-4 rounded text-white lg:mt-0 md:mt-2 lg:w-fit md:w-full max-[640px]:mt-2 max-[640px]:w-full sm:w-full hover:bg-darker">Save</button></td>
  </tr>

)})}
            </table>
         
    </div>
    </div>


  </section>)
}
