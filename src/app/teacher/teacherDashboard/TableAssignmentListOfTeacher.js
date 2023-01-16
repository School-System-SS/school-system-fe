
export default function TableAssignmentListOfTeacher(props) {
  return (<>
    {props.TableView && <div><div >
      <div class="sm:-mx-4 lg:-mx-4 min-w-[1000px]">
        <div class="py-2 inline-block min-w-full sm:px-4 lg:px-4">
          <div class="overflow-hidden">
            <table class="min-w-full border text-center  width:2/5">
              <thead class="border-b">
                <tr>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-3 py-2 border-r">
                    Name
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-3 py-2 border-r">
                    Assignment              </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-3 py-2 border-r">
                    Grade
                  </th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-3 py-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {console.log("from table", props.SelectedAssignmentTeacher.studentInfoGenral)}
                {props.SelectedAssignmentTeacher.studentInfoGenral.map(item => {
                  return (
                    <tr class="border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"> {item.studentName}</td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                        {/* {props.SelectedAssignmentTeacher.path} */}
                        {item.path}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                        {item.grade}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button>Save</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>}


  </>)
}