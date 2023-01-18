import "../../styles/admin.css"
import AdminHeader from "./adminHeader";
import DisplayCreate from "./DisplayCreate";
import Edit from "./Edit";
import CourseStudentList from "./CourseStudentList";

export default function AdminView() {
  return (
    <>
      <section >
        {/* <p className="admin-grid-2">ddd</p> */}
        <AdminHeader/>
        
        <DisplayCreate/>
        
        
        
        
      </section>
    </>
  );
}
