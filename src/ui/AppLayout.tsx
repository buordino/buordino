import AnimationElements from "./AnimationElements";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ScrollBtn from "./ScrollBtn";

const AppLayout = () => {
  return (
    <>
      <AnimationElements type="question" />
      <AnimationElements type="trophy" />
      <AnimationElements type="handle" />
      <AnimationElements type="discount" />
      <ScrollBtn />
      <div className="flex flex-col">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
