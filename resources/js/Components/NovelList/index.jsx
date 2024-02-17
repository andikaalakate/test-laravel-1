import { Link } from "@inertiajs/react";
import Card from "./Card";

const NovelList = ({ hTitle, novels }) => {
    return (
        <>
            <h3 data-aos="fade-up"
                data-aos-anchor-placement="top-center" className="mx-auto py-8 text-center text-4xl font-bold text-black dark:text-color-whity">
                {hTitle}
            </h3>
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                className="row mx-auto my-4 grid max-w-5xl justify-center mini:grid-cols-2 mini:gap-6 hmin:grid-cols-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5"
            >
                <Card novels={novels} />
            </div>
        </>
    );
};

export default NovelList;
