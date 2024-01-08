import { Link } from "@inertiajs/react";

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-color-primary text-white sticky top-0 border-b-2 z-50 -mt-2">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost text-xl">Vanta</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 md:w-auto bg-color-whity text-color-dark placeholder:text-color-secondary"
                        />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
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
                            className="menu menu-sm dropdown-content bg-color-whity text-color-dark rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link href="/profile" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">Settings</Link>
                            </li>
                            <li>
                                <Link href="/">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
