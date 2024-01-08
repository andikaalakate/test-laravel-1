import { Link } from "@inertiajs/react";

const Navbar = ({ user }) => {
    return (
        <>
            <div className="sticky top-0 z-50 mx-auto w-full bg-color-primary shadow-lg">
                <div className="navbar mx-auto -mt-2 max-w-6xl text-white">
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
                                className="input input-bordered h-8 w-24 bg-color-whity text-color-dark placeholder:text-color-secondary md:w-auto"
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
                                className="menu dropdown-content menu-sm z-[1] mt-3 w-64 rounded-box bg-white p-2 text-lg text-color-dark shadow transition-all duration-500 ease-in-out"
                            >
                                {!user ? (
                                    <>
                                        <li>
                                            <Link
                                                href={route("login")}
                                                as="button"
                                                className="justify-between"
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route("register")}
                                                as="button"
                                                className="justify-between"
                                            >
                                                Register
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link
                                                href={route("dashboard")}
                                                as="button"
                                            >
                                                Dashboard
                                            </Link>
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
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
