import AdminDashboardLists from "./AdminDashboardLists";
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
    </div>
  );
};

export default Sidebar;
