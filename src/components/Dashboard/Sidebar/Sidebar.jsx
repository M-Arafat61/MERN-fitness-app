import useAdmin from "../../../hooks/useAdmin";
import useTrainer from "../../../hooks/useTrainer";
import AdminDashboardLists from "./AdminDashboardLists";
import MemberDashboardLists from "./MemberDashboardLists";
import TrainerDashboardLists from "./TrainerDashboardLists";

const Sidebar = () => {
  const [isAdmin] = useAdmin();
  const [isTrainer] = useTrainer();

  return (
    <div>
      {isAdmin ? (
        <AdminDashboardLists />
      ) : isTrainer ? (
        <TrainerDashboardLists />
      ) : (
        <MemberDashboardLists />
      )}
    </div>
  );
};

export default Sidebar;
