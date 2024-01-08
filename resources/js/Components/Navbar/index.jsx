import { Link } from "@inertiajs/react";

const Navbar = () => {
    return (
        <>
            <div className="navbar sticky top-0 z-50 -mt-2 border-b-2 bg-color-primary text-white">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost text-xl">
                        VantaTranslation
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 bg-color-whity text-color-dark placeholder:text-color-secondary md:w-auto"
                        />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="avatar btn btn-circle btn-ghost"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="/andika-alakate.jpeg"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-color-whity p-2 text-color-dark shadow"
                        >
                            <li>
                                <Link
                                    href="/profile"
                                    className="justify-between"
                                >
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">Settings</Link>
                            </li>
                            <li>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
