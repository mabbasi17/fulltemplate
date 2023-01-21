import HomePage from "../Guest/Pages/HomePage";
import SignUp from './../User/Auth/SignUp';
import SignIn from './../User/Auth/SignIn';
import AuthGuard from './AuthGuard';
import DashBoardLayout from '../Admin/Pages/DashBoardLayout';
import DashBoard from './../Admin/Pages/Dashboard';
import Products from "../Admin/Pages/Products";

const  checkAuth=(uri , child)=> {
    return (
        <AuthGuard uri={uri}>{child}</AuthGuard>
    )
}

export const routes = [

    // UnGuarded Routes
    { path: '/', element: (<HomePage />) }
    ,
    { path: '/signup', element: (checkAuth('signup' , <SignUp/>) ) }
    ,
    { path: '/signin', element: (checkAuth('signin' , <SignIn/>) ) }
    ,
    // Guarded Routes
    { path: '/dashboard', element: (checkAuth('dashboard', <DashBoardLayout children={<DashBoard />} />)) }
    ,
    { path: '/products', element: (checkAuth('dashboard', <DashBoardLayout children={ <Products/>} />) )}


]

