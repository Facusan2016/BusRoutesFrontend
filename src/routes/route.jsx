import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import Map, { loader as mapLoader } from "../components/Map";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Map/>,
        loader: mapLoader
      },
      {
        path: ':route_id',
        element: <Map/>,
        loader: mapLoader
      }
    ]
  },
]);

export default router;