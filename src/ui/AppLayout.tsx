import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const AppLayout = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default AppLayout;
