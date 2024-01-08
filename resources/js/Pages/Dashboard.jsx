import CustomInput from "@/Components/CustomInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Inertia } from '@inertiajs/inertia';
import { useState } from "react";

export default function Dashboard({ auth }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [author, setAuthor] = useState("");
    const [translator, setTranslator] = useState("");
    const [status, setStatus] = useState("");
    const [genre, setGenre] = useState("");

    const handleSubmit = () => {
        const data = {
            title,
            description,
            // image,
            author,
            translator,
            status,
            genre,
        };
        Inertia.post("/novel", data);
        setTitle("");
        setDescription("");
        setImage(null);
        setAuthor("");
        setTranslator("");
        setStatus("");
        setGenre("");
    };

    console.log(auth);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="mx-auto py-8 text-center text-2xl font-bold text-white">
                                Tambahkan Novel Baru
                            </h3>
                            <CustomInput
                                type="text"
                                placeholder="Title"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                            <CustomInput
                                type="text"
                                placeholder="Description"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                            />
                            <CustomInput
                                type="text"
                                placeholder="Author"
                                onChange={(e) => setAuthor(e.target.value)}
                                value={author}
                            />
                            <CustomInput
                                type="text"
                                placeholder="Translator"
                                onChange={(e) => setTranslator(e.target.value)}
                                value={translator}
                            />
                            <CustomInput
                                type="text"
                                placeholder="Status"
                                onChange={(e) => setStatus(e.target.value)}
                                value={status}
                            />
                            <CustomInput
                                type="text"
                                placeholder="Genre"
                                onChange={(e) => setGenre(e.target.value)}
                                value={genre}
                            />
                            <div className="flex justify-between my-2">
                                {/* <CustomInput
                                    type="file"
                                    onChange={(e) =>
                                        setImage(e.target.files[0])
                                    }
                                    fileInput
                                    value={image}
                                /> */}
                                <button
                                    type="submit"
                                    value="Submit"
                                    className="bg-color-primary rounded-lg py-2 px-10 text-lg hover:bg-blue-700 my-2"
                                    onClick={() => handleSubmit()}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
