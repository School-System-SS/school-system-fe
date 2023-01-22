import SideBarCategory from "./SideBarCategory"


export default function SideBar(props) {

  return (
    
    <section className="fixed h-[100%]">
      <div className=" bg-main relative h-[100%]" >
        <div className="pt-4 pb-2 px-6 ">
          <div className="flex relative items-center">
            <div className="shrink-0">
              <img src="https://icons.iconarchive.com/icons/iconica/pastel/128/scheduled-tasks-icon.png" className="h-3  sm:h-7" alt="Flowbite Logo" />
            </div>
            <div className="grow  ml-3">
              <p className="text-[#FFFFFF] mb-0 h-full font-semibold ">Assignments</p>
            </div>
          </div>
        </div>
        <ul className="text-[#FFFFFF]  px-1">
          {props.teacherAssignmentList.map(item => {
            return (
              <SideBarCategory item={item} ShowAssignmentsTable={props.ShowAssignmentsTable} />
            )
          })}
        </ul>
      </div>





    </section>

  )
}






