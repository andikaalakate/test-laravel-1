import { Link, Head } from "@inertiajs/react";
export default function Home ({ nama }) {
    return (
        <>
            <Head title="Home" />
            <h1>Home</h1>
            <div>
                <h2>{nama}</h2>
            </div>
        </>
    );
};