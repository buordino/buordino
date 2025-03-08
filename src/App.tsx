import ContextProvider from "./context/ContextProvider";
import AppLayout from "./ui/AppLayout";

const App = () => {
  return (
    <ContextProvider>
      <div>
        <AppLayout />
      </div>
    </ContextProvider>
  );
};

export default App;
