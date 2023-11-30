import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import Container from "../../components/Shared/Container/Container";
import useAuth from "../../hooks/useAuth";

const DashboardLayout = () => {
  const { user } = useAuth();
  return (
    <Container>
      <div className='flex'>
        <div className='bg-[#526D82] w-44  md:w-64 min-h-screen space-y-20 pt-10 '>
          <div className='flex flex-col items-center space-y-2'>
            <img
              className='w-32 rounded-full'
              src='/src/assets/Images/logo.jpg'
              alt=''
            />
            <div className='flex flex-col gap-5 items-center justify-center font-bold text-xl md:text-3xl text-extended-teal'>
              SyncFit Connect
            </div>
          </div>
          <div className='text-white'>
            <Sidebar></Sidebar>
          </div>
        </div>
        <div className='flex-1  bg-extended-gray'>
          <div className='bg-[#526D82] text-center py-10 text-white text-3xl font-bold'>
            Welcome,{" "}
            <span className='text-extended-teal'>
              {user ? `${user?.displayName}` : ""}
            </span>
          </div>
          <div className='pl-5 md:pl-10'>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DashboardLayout;
