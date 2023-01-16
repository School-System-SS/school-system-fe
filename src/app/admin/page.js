import CreateUser from "./CreateUser";
import CreateCourse from "./CreateCourse";
import "../../styles/admin.css"

export default function AdminView() {
  return (
    <>
      <section className="admin-grid">
        {/* <p className="admin-grid-2">ddd</p> */}
        <CreateCourse/>
        <CreateUser />
      </section>
    </>
  );
}
