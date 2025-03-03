import AnimationElementsCircle from "./AnimationElementsCircle";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const AppLayout = () => {
  return (
    <>
      <AnimationElementsCircle type="circle" />
      <AnimationElementsCircle type="squre" />
      <AnimationElementsCircle type="triangle" />

      <div className="flex flex-col  ">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
