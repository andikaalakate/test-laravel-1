import FormAddNovel from "@/Components/FormAddNovel";
import ListNovel from "@/Components/ListNovel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Dashboard = ({ auth, myNovels, ...props }) => {
    const [isNotif, setIsNotif] = useState(false);

    useEffect(() => {
        // Check if props.flash is not null and set isNotif to true
        if (props.flash) {
            setIsNotif(true);

            // Set a timeout to reset isNotif to false after 5 seconds
            const timeout = setTimeout(() => {
                setIsNotif(false);
            }, 5000);

            // Clear the timeout if the component unmounts or props.flash changes
            return () => clearTimeout(timeout);
        }
    }, [props.flash]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head><title>Dashboard</title></Head>
            {isNotif && (
                <div className="toast toast-end toast-top z-50">
                    <div className="alert alert-success">
                        <span className="text-color-whity">
                            {props.flash.message}
                        </span>
                    </div>
                </div>
            )}

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <FormAddNovel
                            auth={auth}
                            flash={props.flash}
                            prop={props}
                        />
                    </div>
                </div>
                <div className="mx-auto my-4 max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <ListNovel myNovels={myNovels} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
