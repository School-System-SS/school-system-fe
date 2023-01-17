import SideBarCategory from "./SideBarCategory"
export default function SideBar(props) {
  return (
    <section className="fixed  h-[100%]">
      <div class=" bg-main relative h-[100%]" >
        <div class="pt-4 pb-2 px-6 ">
          <div class="flex relative items-center">
            <div class="shrink-0">
             <img src="https://icons.iconarchive.com/icons/iconica/pastel/128/scheduled-tasks-icon.png" class="h-3  sm:h-7" alt="Flowbite Logo" />
            </div>
            <div class="grow  ml-3">
              <p class="text-white font-semibold ">Assignments</p>
            </div>
          </div>
        </div>
        <ul class=" text-white  px-1">
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






