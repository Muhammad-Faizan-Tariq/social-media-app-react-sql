import './style.scss'
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
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';
import { QueryClient, QueryClientProvider } from 'react-query'

const App = () => {

  const { darkMode } = useContext(DarkModeContext)
  const {currentUser} = useContext(AuthContext);
  const queryClient = new QueryClient()
  
  const ProtectedRoute = ({children}) => {
    if (!currentUser){
      return <Navigate to="/login"/>
    }
    return children;
  }

  const Layout = () => {
    return(
      <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{ display: "flex"}}>
            <LeftBar/>
            <div style={{flex: 6}}>
            <Outlet/>
            </div>
            <RightBar/>
        </div>
      </div>
      </QueryClientProvider>
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
          path: "/profile",
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