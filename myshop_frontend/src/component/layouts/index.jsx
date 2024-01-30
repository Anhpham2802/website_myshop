import Footer from "./footer"
// import Header from "./header"
import Header from "../admin/header"
import { useEffect } from "react";
import { login } from "../../api"

const Layout = ({ children, ...props }) => {
    useEffect(() => {
        login({ "email": "t@gmail.com", "password": "1" });
    }, []);

    return (
        <div {...props}>
            <Header />
            <main>
                <div className="w-11/12 h-fit m-auto">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
