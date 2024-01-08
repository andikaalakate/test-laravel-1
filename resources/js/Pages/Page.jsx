import Carousel from "@/Components/Carousel/index.jsx";
import AboutVanta from "@/Components/Contents/AboutVanta/index.jsx";
import Navbar from "@/Components/Navbar/index.jsx";
import NovelList from "@/Components/NovelList/index.jsx";
import Layout from "@/Layouts/Layout";

const Page = () => {
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
                <Navbar />
                <div className="m-4 mx-auto max-w-5xl rounded-lg border-2 p-4 text-black shadow-lg bg-white">
                    <h1 className="text-center text-3xl font-bold">
                        VANTA Translation
                    </h1>
                    <AboutVanta />
                </div>
                <div className="mx-auto p-4 pb-20">
                    <NovelList images={images} />
                </div>
            </div>
        </Layout>
      </>
    );
};

export default Page;
