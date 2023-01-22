import "../../styles/admin.css"
import AdminHeader from "./adminHeader";
import DisplayCreate from "./DisplayCreate";


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
