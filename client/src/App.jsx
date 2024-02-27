import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
import Profile from './pages/profile'
import Navbar from './components/navbar';
import RightBar from './components/rightbar';
import LeftBar from './components/leftbar';

const App = () => {

  const currentUser = true;
  const ProtectedRoute = ({children}) => {
    if (!currentUser){
      return <Navigate to="/login"/>
    }
    return children;
  }

  const Layout = () => {
    return(
      <div>
        <Navbar/>
        <div style={{ display: "flex"}}>
            <LeftBar/>
            <div style={{flex: 6}}>
            <Outlet/>
            </div>
            <RightBar/>
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout/></ProtectedRoute>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/profile/:id",
          element: <Profile/>
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App