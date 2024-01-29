import Footer from "./footer"
import Header from "./header"

const Layout = ({children, ...props}) => {
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