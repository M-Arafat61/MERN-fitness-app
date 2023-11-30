import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className='bg-[#526D82]'>
        <Navbar />
      </div>

      <Outlet></Outlet>
      <div className='bg-[#526D82]'>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
