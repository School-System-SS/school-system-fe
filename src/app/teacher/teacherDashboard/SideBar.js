
// import TableAssignmentListOfTeacher from "./TableAssignmentListOfTeacher"
import Image from "next/image"
import SideBarCategory from "./SideBarCategory"
export default function SideBar(props) {
  return (
    <>
      <div class="w-60 h-full shadow-md bg-white" id="sidenavSecExample">
        <div class="pt-4 pb-2 px-6">

          <div class="flex items-center">
            <div class="shrink-0">
              <Image
                src="/assignment.png"
                width={30}
                height={30}
                className="rounded-full w-10"
              />
            </div>
            <div class="grow ml-3">
              <p class="text-sm font-semibold text-blue-600">{props.name}</p>
            </div>
          </div>
        </div>
        <ul class="relative px-1">
          {props.teacherAssignmentList.map(item => {
            return (
              <SideBarCategory item={item} ShowAssignmentsTable={props.ShowAssignmentsTable} />
            )
          })}
        </ul>
      </div>
    </>)
}






