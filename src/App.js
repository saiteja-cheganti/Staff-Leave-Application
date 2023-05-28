import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Admin from './components/Admin';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import LeavesContext from './contexts/LeavesContext';
import RootLayout from './RootLayout';
function App() {
  const browserRouter = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"/",
          element:<Login/>
        },
        {
          path:"/home",
          element:<Home/>
        },
        {
          path:"/admin",
          element:<Admin/>
        }
      ]
    }
  ])

  return (
    <LeavesContext>
      <div className="App">
        <RouterProvider router={browserRouter}/>
      </div>
    </LeavesContext>
  );
}

export default App;
