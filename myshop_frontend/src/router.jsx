import { ROUTERS } from "./utils/router";
import Home from "./pages/users/home/home";
import { Route, Routes } from "react-router-dom";
import Layout from "./component/layouts/index";
import ProductDetail from "./pages/users/products/product_detail";
import WomenProduct from "./pages/users/products/women_product";
import KidProduct from "./pages/users/products/kid_product";
import MenProduct from "./pages/users/products/men_product";
import Cart from "./pages/users/cart";
import Counter from "./component/counter";
import Liked from "./pages/users/liked";
import Store from "./pages/users/store/store";
import Sidebar from "./component/admin/sidebar";

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
            </Routes>
        </Layout>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;
