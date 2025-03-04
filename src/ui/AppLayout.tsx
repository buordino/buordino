import AnimationElementsCircle from "./AnimationElementsCircle";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const AppLayout = () => {
  return (
    <>
      <AnimationElementsCircle type="gift" />
      <AnimationElementsCircle type="question" />
      <AnimationElementsCircle type="coupon" />

      <div className="flex flex-col  ">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
