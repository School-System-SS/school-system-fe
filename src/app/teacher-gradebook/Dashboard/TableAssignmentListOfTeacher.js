
export default function TableAssignmentListOfTeacher(props) {
  
  return (
    <section className="h-[500px] overflow-scroll mt-[2%] ml-[20%]">
      <div><div >
        <table className="text-center shadow-lg 1 border-collapse min-w-[1000px]">
          <tr className="sticky top-0   bg-darker">
            <th className="text-center 4 rounded-tl-2xl text-white bg-blue-100 border text-left px-8 py-4">Student</th>
            <th className="text-center 4 text-white bg-blue-100 border text-left px-8 py-4">Assignment</th>
            <th className="text-center w-4 text-white bg-blue-100 border text-left px-8 py-4">Grade</th>
            <th className=" text-center w-4 rounded-tr-2xl text-white bg-blue-100 border text-left px-8 py-4">Action</th>

          </tr>
          {props.SelectedAssignmentTeacher.studentInfoGenral.map(item => {
            return (
              <tr className=" h-1 hover:bg-[#9287af]">
                <td className=" hover:bg-[#9287af] border w-4 px-8 py-4"> {item.studentName}</td>
                <td className=" hover:bg-[#9287af] border w-4 px-8 py-4"> {item.path}</td>
                <td className=" hover:bg-[#9287af] border w-4 px-8 py-4"> {item.grade}</td>
                <td className=" h-1 hover:bg-[#9287af] border w-4 px-8 py-4"> <button className="bg-darker py-2 px-4 rounded text-white lg:mt-0 md:mt-2 lg:w-fit md:w-full max-[640px]:mt-2 max-[640px]:w-full sm:w-full hover:bg-lighter">Save</button></td>
              </tr>

            )
          })}
        </table>

      </div>
      </div>


    </section>)
}
