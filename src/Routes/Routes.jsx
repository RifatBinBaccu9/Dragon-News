import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Details from "../Pages/Details/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
        {
            path: "/",
            element: <Home />,
            loader: () => fetch('../../public/Api/news.json')
        },
        {
          path: "/news/:id",
          element: <Details />,
          loader: () => fetch('../../public/Api/news.json')
        },
        {
          path: "/login",
          element: <Login />
        },
      ]
    },
  ]);

  export default router;