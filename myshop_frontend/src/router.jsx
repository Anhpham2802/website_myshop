import { ROUTERS } from "./utils/router";
import Home from "./pages/users/home/home";
import { Route, Routes } from "react-router-dom";
import Layout from "./component/layouts/index";
import ProductDetail from "./pages/users/products/product_detail";

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
