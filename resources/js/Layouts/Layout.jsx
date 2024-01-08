import Footer from "@/Components/Footer";
import ScrollToTop from "@/Components/Utilities/ScrollToTop";
import { Head } from "@inertiajs/react";
import "animate.css";

const Layout = ({ children, title }) => {
    return (
        <>
        <Head title={title} />
        <div className="min-h-screen relative animate__animated animate__fadeIn animate__slow bg-color-whity">
            {children}
            <Footer />
            <ScrollToTop />
        </div>
        </>
    );
};

export default Layout;
