import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="overflow-auto grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;