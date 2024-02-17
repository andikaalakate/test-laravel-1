import { Link } from "@inertiajs/react";
import React from "react";

const Navbar = ({ user }) => {
    const [theme, setTheme] = React.useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    React.useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);
    return (
        <>
            <div className="sticky top-0 z-50 mx-auto w-full bg-color-primary shadow-lg">
                <div className="navbar mx-auto -mt-2 max-w-6xl text-white">
                    <div className="flex-1">
                        <Link href="/" className="btn btn-ghost text-xl">
                            VantaTranslation
                        </Link>
                        <label className="cursor-pointer grid place-items-center transition-all">
                            <input onChange={toggleTheme} type="checkbox" value="synthwave"
                                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg"
                                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <path
                                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg"
                                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        </label>
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
