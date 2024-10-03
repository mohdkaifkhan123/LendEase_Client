import "./App.css";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return (
    <div
      className="bg-sky-100
 min-h-screen min-h-screen flex flex-col "
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
