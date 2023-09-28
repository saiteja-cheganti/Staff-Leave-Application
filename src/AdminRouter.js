import { Routes,Route } from "react-router-dom";
import Home from "./components/adminComp/Leavereq";
import Users from "./components/adminComp/Displaystaff";
import Register from "./components/adminComp/Register";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import AdminLayout from "./AdminLayout";
function AdminRouter(){

  const browserRouter = createBrowserRouter([
    {
      path:"/admin",
      element:<AdminLayout/>,
      children:[
        {
          path:"/admin",
          element:<Register/>
        },
        {
          path:"/admin/leavereq",
          element:<Home/>
        },
        {
          path:"/admin/users",
          element:<Users/>
        }
      ]
    }
  ])

  return (
    <div className="App">
       <RouterProvider router={browserRouter}/>
    </div>
  );
}



export default AdminRouter