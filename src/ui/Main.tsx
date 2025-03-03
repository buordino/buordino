import MainAppShowCase from "./MainAppShowCase";
import MainFeatures from "./MainFeatures";
import MainTitle from "./MainTitle";

const Main = () => {
  return (
    <main className="grow overflow-auto ">
      <MainTitle />
      <MainFeatures />
      <MainAppShowCase />
    </main>
  );
};

export default Main;
