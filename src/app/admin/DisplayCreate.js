import CreateUser from "./CreateUser";
import CreateCourse from "./CreateCourse";
import "../../styles/admin.css"




export default function DisplayCreate() {
  return (
    
        
        
        <section class="admin-grid">
        <CreateCourse/>
        <CreateUser />
        </section>
        
        
  );
}
