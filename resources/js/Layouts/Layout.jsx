import Footer from "@/Components/Footer";
import "animate.css";

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen relative animate__animated animate__fadeIn animate__slow bg-color-whity scrollbar-thin scrollbar-track-color-primary scrollbar-thumb-color-whity">
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
