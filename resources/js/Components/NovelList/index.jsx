import { Link } from "@inertiajs/react";
import Card from "./Card";

const NovelList = ({ images }) => {
    return (
        <div className="animate__animated animate__fadeInUp animate__slow mini:grid-cols-2 mini:gap-6 hmin:grid-cols-2 grid xl:mx-20 my-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4 pc:gap-20 row justify-center">
            <Card images={images} />
        </div>
    );
};

export default NovelList;
