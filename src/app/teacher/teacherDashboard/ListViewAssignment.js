import SideBar from "./SideBar"
import TableAssignmentListOfTeacher from "./TableAssignmentListOfTeacher"
import { data } from "./data"
import { useState } from "react";
export default function ListViewAssignment() {

    const [TableView, setTableView] = useState(false);
    const [SelectedAssignmentTeacher, setSelectedAssignmentTeacher] = useState({})

    const ShowAssignmentsTable = (assignmentName) => {
        const SelectedAssignment = data.find(assignment => assignment.assignmentName === assignmentName);
        setTableView(true)
        setSelectedAssignmentTeacher(SelectedAssignment)
        console.log(SelectedAssignmentTeacher)
    }
    return (
        <div className="flex justfiy-between gap-40">
            <SideBar name='Assignments' teacherAssignmentList={data} ShowAssignmentsTable={ShowAssignmentsTable} />
            <TableAssignmentListOfTeacher SelectedAssignmentTeacher={SelectedAssignmentTeacher} TableView={TableView} />
        </div>
    )
}