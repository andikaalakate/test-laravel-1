import Footer from "@/Components/Footer";
import { Head } from "@inertiajs/react";
import "animate.css";

const Layout = ({ children, title }) => {
    return (
        <>
        <Head title={title} />
        <div className="min-h-screen relative animate__animated animate__fadeIn animate__slow bg-color-whity scrollbar-thin scrollbar-track-color-primary scrollbar-thumb-color-whity">
            {children}
            <Footer />
        </div>
        </>
    );
};

export default Layout;
