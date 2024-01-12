import Carousel from "@/Components/Carousel/index.jsx";
import AboutVanta from "@/Components/Contents/AboutVanta/index.jsx";
import Navbar from "@/Components/Navbar/index.jsx";
import NovelList from "@/Components/NovelList/index.jsx";
import Layout from "@/Layouts/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Page = ({novels, auth}) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    });
    const images = [];

    for (let i = 1; i <= 10; i++) {
        images.push({
            src: `/background/background-${i}.webp`,
            alt: `Background ${i}`,
            title: `Novel ${i}`,
            description: `Deskripsi Novel ${i}`,
        });
    }

    return (
        <>
            <Layout title="Home">
                <div className="min-h-screen bg-color-whity">
                    <Carousel images={images} />
                    <Navbar user={auth.user} />
                    <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-center"
                        className="m-4 mx-auto max-w-5xl rounded-lg border-2 bg-white p-4 text-black shadow-lg"
                    >
                        <h1
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
                            className="text-center text-3xl font-bold"
                        >
                            VANTA Translation
                        </h1>
                        <AboutVanta />
                    </div>
                    <div className="mx-auto p-4 pb-20">
                        <NovelList hTitle="Novel Terbaru" novels={novels} />
                        <NovelList hTitle="Novel Populer" novels={novels} />
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Page;
