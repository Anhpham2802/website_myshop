import Footer from "./footer"
import Header from "./header"
import { ToastContainer } from 'react-toastify';

const Layout = ({children, ...props}) => {
    return (
        <div {...props}>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
            />
            <ToastContainer />
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
