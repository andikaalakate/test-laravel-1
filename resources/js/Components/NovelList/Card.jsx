import { Link } from "@inertiajs/react";
import React from "react";

const Card = ({ images }) => {
    return (
        <>
            {images.map((image, index) => (
                <div
                    key={index}
                    className="row group card mx-auto items-center justify-center rounded-lg border-2 border-color-whity bg-gradient-to-br from-color-whity to-white shadow-md shadow-slate-700 transition-all duration-500 hover:scale-105 hover:border-color-primary hover:from-color-primary hover:to-blue-500 active:scale-110"
                >
                    <Link href="/" className="cursor-pointer">
                        <img
                            src={image.src} // Menggunakan properti src dari properti image
                            alt={image.alt} // Menggunakan properti alt dari properti image
                            className="img-card rounded-t-lg"
                            width={350}
                            height={350}
                        />
                        <h3
                            className="text-md title card-title p-4 font-bold text-color-dark transition-all duration-500 group-hover:text-color-whity md:text-xl"
                            title={image.title}
                        >
                            {image.title}
                        </h3>
                    </Link>
                </div>
            ))}
        </>
    );
};

export default Card;
