import { useEffect } from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'

function MainLayout() {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "| Home";
    document.title = pageTitle;
  }, [location]);
  // xl:max-w-[1100px] 2xl:max-w-[1400px] px-5 md:px-0 mx-auto
  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-between font-poppins overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;