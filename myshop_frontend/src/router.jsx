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
import Sidebar from "./component/admin/sidebar";
import Login from "./component/login/login";
import Register from "./component/login/register";

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
            path: ROUTERS.USER.CART,
            component: <Cart />,
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
            path: ROUTERS.ADMIN.DASHBOARD,
            component: <Sidebar />,
        },
    ]

    return (
        <Layout>
            <Routes>
                {userRouter.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
                <Route path={ROUTERS.LOGIN} element={<Login />} />
                <Route path={ROUTERS.REGISTER} element={<Register />} />
            </Routes>
        </Layout>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;
