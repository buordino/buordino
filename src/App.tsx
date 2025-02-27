import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  { element: <AppLayout />, children: [{ path: "/", element: <HomePage /> }] },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
