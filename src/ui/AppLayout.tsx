import AnimationElements from "./AnimationElements";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const AppLayout = () => {
  return (
    <>
      <AnimationElements type="gift" />
      <AnimationElements type="question" />
      <AnimationElements type="coupon" />

      <div className="flex flex-col  ">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
