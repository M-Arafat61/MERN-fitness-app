import AdminDashboardLists from "./AdminDashboardLists";
import MemberDashboardLists from "./MemberDashboardLists";
import TrainerDashboardLists from "./TrainerDashboardLists";

const Sidebar = () => {
  return (
    <div>
      <AdminDashboardLists />
      <hr />
      <br />
      <br />

      <hr />

      <TrainerDashboardLists />

      <hr />
      <br />
      <br />

      <hr />

      <MemberDashboardLists />
    </div>
  );
};

export default Sidebar;
