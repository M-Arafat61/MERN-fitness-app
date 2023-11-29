import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import Container from "../../components/Shared/Container/Container";

const DashboardLayout = () => {
  return (
    <Container>
      <div className='flex'>
        <div className='min-w-min min-h-screen bg-extended-teal space-y-20 pt-10 '>
          <div className='flex flex-col items-center space-y-2'>
            <div className=' font-bold text-3xl'>SyncFit Connect</div>
          </div>
          <Sidebar></Sidebar>
        </div>
        <div className='flex-1 pl-5 md:pl-16'>
          <Outlet></Outlet>
        </div>
      </div>
    </Container>
  );
};

export default DashboardLayout;
