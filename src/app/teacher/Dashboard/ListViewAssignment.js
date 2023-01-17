import SideBar from "./SideBar"
import TableAssignmentListOfTeacher from "./TableAssignmentListOfTeacher"
import { data } from "./data"
import { useState } from "react";
import EmptyBackground from "./EmptyBackground";
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
        <div className="mt-16 flex justfiy-between gap-40">
            <SideBar teacherAssignmentList={data} ShowAssignmentsTable={ShowAssignmentsTable} />
            {
             TableView ? <TableAssignmentListOfTeacher SelectedAssignmentTeacher={SelectedAssignmentTeacher} TableView={TableView} />:<EmptyBackground/>
            }
              

        </div>
    )
}