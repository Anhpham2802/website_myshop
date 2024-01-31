import { ROUTERS } from "./utils/router";
import Home from "./pages/users/home/home";
import { Route, Routes } from "react-router-dom";
import Layout from "./component/layouts/index";
import ProductDetail from "./pages/users/products/product_detail";
import WomenProduct from "./pages/users/products/women_product";
import KidProduct from "./pages/users/products/kid_product";
import MenProduct from "./pages/users/products/men_product";
import Cart from "./pages/users/carts_liked/cart";
import Liked from "./pages/users/carts_liked/liked";
import Store from "./pages/users/store/store";
import AdminLayout from "./component/admin";
import Login from "./component/login/login";
import Register from "./component/login/register";
import FootwearProduct from "./pages/users/products/footwear";
import AccessoryProduct from "./pages/users/products/accessory";
import BagBaloProduct from "./pages/users/products/bagBalo";
import HistoryCart from "./pages/users/carts_liked/history";
import Checkout from "./pages/users/carts_liked/checkout";
import Profile from "./pages/users/profile";
import ProtectedRoute from "./component/ProtectedRoute";

const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTERS.USER.HOME,
            component: <Home />,
        },
        {
            path: ROUTERS.USER.PRODUCT,
            component: <ProductDetail />,
        },
        {
            path: ROUTERS.USER.WOMEN,
            component: <WomenProduct />,
        },
        {
            path: ROUTERS.USER.KID,
            component: <KidProduct />,
        },
        {
            path: ROUTERS.USER.MEN,
            component: <MenProduct />,
        },
        {
            path: ROUTERS.USER.GIAY_DEP,
            component: <FootwearProduct />,
        },
        {
            path: ROUTERS.USER.PHU_KIEN,
            component: <AccessoryProduct />,
        },
        {
            path: ROUTERS.USER.TUI_BALO,
            component: <BagBaloProduct />,
        },
        {
            path: ROUTERS.USER.CART,
            component: <Cart />,
        },
        {
            path: ROUTERS.USER.HISTORY_CART,
            component: <HistoryCart />,
        },
        {
            path: ROUTERS.USER.LIKED,
            component: <Liked />,
        },
        {
            path: ROUTERS.USER.STORE,
            component: <Store />,
        },
        {
            path: ROUTERS.LOGIN,
            component: <Login />,
        },
        {
            path: ROUTERS.REGISTER,
            component: <Register />,
        }
    ]

    return (
        <Routes>
            <Route exact path='/' element={<Layout />}>
                {userRouter.map((item, key) => {
                    if (item.path === '/') {
                        return <Route index key={key} element={item.component} />
                    }
                    else return <Route key={key} path={item.path} element={item.component} />
                })}
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path='/admin' element={<AdminLayout />} />
            </Route>
        </Routes>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;
