import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto]">
      <Header />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
