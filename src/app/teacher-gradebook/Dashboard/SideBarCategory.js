


export default function SideBarCategory(props) {
  return (
    <>
      <li class="relative">
        <a class="text-white flex items-center text-sm py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded hover:text-blue-600  transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <img src="https://icons.iconarchive.com/icons/dryicons/aesthetica-2/128/page-accept-icon.png" class="h-6 mr-3 sm:h-7" alt="Flowbite Logo" />
          <span><button onClick={() => props.ShowAssignmentsTable(props.item.assignmentName)}> {props.item.assignmentName}</button></span>  {/* 1*/}
        </a>
      </li>
      <hr class="my-2" />
    </>)
}