
export default function TableAssignmentListOfTeacher(props) {

  return (
    // <section className="h-[500px] overflow-scroll mt-[2%] ml-[20%]">
    //   <div><div >
    //     <table className="text-center shadow-lg 1 border-collapse min-w-[1000px]">
    //       <tr className="sticky top-0   bg-main">
    //         <th className="rounded-tl-3xl hovertext-sm font-medium text-white px-6 py-4 text-left">Student</th>
    //         <th className=" hovertext-sm font-medium text-white px-6 py-4 text-left">Assignment</th>
    //         <th className=" hovertext-sm font-medium text-white px-6 py-4 text-left">Grade</th>
    //         <th className="rounded-tr-3xl hovertext-sm font-medium text-white px-6 py-4 text-left">Action</th>

    //       </tr>
    <section className="mt-[3%] ml-[14%]">
      <div class="mx-24 flex flex-col ">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div class="py-2 inline-block min-w-full sm:px-8 lg:px-8">

            <div class="overflow-hidden">
              <table class="min-w-[900px] min-w-full">
                <thead class="bg-main border-b">
                  <tr>
                    <th
                      scope="col"
                      class="rounded-tl-3xl hovertext-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Student
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left">
                      Assignment
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left">
                      Grade
                    </th>
                    <th
                      scope="col"
                      class="rounded-tr-3xl hovertext-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Action
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {props.SelectedAssignmentTeacher.studentInfoGenral.map(item => {
                    return (
                      <tr className="hover:bg-lighter hover:text-[#FFFFFF] bg-gray-100 border-b">
                        <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap"> {item.studentName}</td>
                        <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap"> {item.path}</td>
                        <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap"> {item.grade}</td>
                        <td className="litext-sm text-gray-900 font-medium  px-6 py-3 whitespace-nowrap"> <button className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        </button></td>
                      </tr>

                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
