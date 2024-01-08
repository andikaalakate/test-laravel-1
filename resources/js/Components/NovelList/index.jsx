import { Link } from "@inertiajs/react";
import Card from "./Card";

const NovelList = ({hTitle, novels}) => {
    return (
        <>
        <h3 className="text-4xl py-8 font-bold text-center mx-auto text-color-dark">{hTitle}</h3>
        <div className="animate__animated animate__fadeInUp animate__slow row justify-center mini:grid-cols-2 my-4 grid mini:gap-6 hmin:grid-cols-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 mx-auto max-w-5xl">
            <Card novels={novels} />
        </div>
        </>
    );
};

export default NovelList;
