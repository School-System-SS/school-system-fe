import SideBar from "./SideBar"
import TableAssignmentListOfTeacher from "./TableAssignmentListOfTeacher"
import { useState } from "react";
import EmptyBackground from "./EmptyBackground";
export default function ListViewAssignment() {

    const [TableView, setTableView] = useState(false);
    const [SelectedAssignmentTeacher, setSelectedAssignmentTeacher] = useState({})

    return (
        <div className=" flex justfiy-between gap-40">
            <SideBar
            />
            {
                TableView ? <TableAssignmentListOfTeacher SelectedAssignmentTeacher={SelectedAssignmentTeacher} TableView={TableView} /> : <EmptyBackground />
            }
        </div>
    )
}