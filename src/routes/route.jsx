import { createBrowserRouter } from "react-router-dom"
import Map, { loader as mapLoader } from "../components/Map";
import App from "../App";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path:'/',
        element: <Map/>
      },
      {
        path: ':route_id',
        element: <Map/>,
        loader: mapLoader
      }
    ]
  },
])

export default router;
