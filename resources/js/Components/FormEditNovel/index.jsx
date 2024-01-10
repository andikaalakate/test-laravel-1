import { Inertia } from "@inertiajs/inertia";
import { useEffect, useState } from "react";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import FormData from "form-data";
import { router, useForm } from "@inertiajs/react";

const FormEditNovel = ({ auth, flash, myNovels }) => {
    // console.log(flash)
    // console.log(myNovels)
    const [uimage, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null); // State untuk menyimpan URL preview gambar
    const [isNotif, setIsNotif] = useState(false);

    const { data, post, setData, processing, errors, reset } = useForm({
        id: myNovels.id,
        title: myNovels.title,
        description: myNovels.description,
        image: "",
        author: myNovels.author,
        translator: myNovels.translator,
        status: myNovels.status,
        genre: myNovels.genre,
    });

    const handleImageChange = async (e) => {
        const selectedFile = e.target.files[0];
        // console.log("Selected file:", selectedFile); // Log the selected file
        setImage(selectedFile); // Update state with the selected file

        // Buat URL untuk preview gambar
        setPreviewImage(URL.createObjectURL(selectedFile));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Submitting with image:", uimage);

        const formData = new FormData();
        formData.append("id", myNovels.id);
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("image", uimage);
        formData.append("author", data.author);
        formData.append("translator", data.translator);
        formData.append("status", data.status);
        formData.append("genre", data.genre);

        // console.log("Form data:", formData); // Log the FormData object

        router.post("/novel/update", formData, {
            forceFormData: true,
        });

        setIsNotif(true);

        // Reset form data and image state after submission
        setData({
            title: "",
            description: "",
            author: "",
            image: null,
            translator: "",
            status: "",
            genre: "",
        });
        setImage(null);
        setPreviewImage(null); // Hapus URL preview gambar setelah pengiriman
    };

    useEffect(() => {
        return () => {
            reset(
                "title",
                "description",
                "image",
                "author",
                "translator",
                "status",
                "genre",
            );
        };
    }, []);

    // console.log(auth);
    return (
        <>
            {isNotif && (
                <div className="toast toast-end toast-top">
                    <div className="alert alert-success">
                        <span className="text-color-whity">
                            {flash.message}
                        </span>
                    </div>
                </div>
            )}
            <div className="p-6 text-gray-900 dark:text-gray-100">
                <h3 className="mx-auto py-8 text-center text-2xl font-bold text-white">
                    Edit Novel
                </h3>
                <form
                    method="post"
                    action="/novel/update"
                    encType="multipart/form-data"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <InputLabel htmlFor="title" value="Title" />

                        <TextInput
                            id="title"
                            name="title"
                            value={data.title}
                            placeholder={myNovels.title}
                            className="mt-1 block w-full"
                            autoComplete="title"
                            onChange={(e) => setData("title", e.target.value)}
                            required
                        />

                        <InputError message={errors.title} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="description" value="Description" />

                        <textarea
                            id="description"
                            name="description"
                            value={data.description}
                            placeholder={myNovels.description}
                            className="order-gray-300 mt-1 block h-full w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600"
                            autoComplete="description"
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.description}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="author" value="Author" />

                        <TextInput
                            id="author"
                            name="author"
                            value={data.author}
                            placeholder={myNovels.author}
                            className="mt-1 block w-full"
                            autoComplete="author"
                            onChange={(e) => setData("author", e.target.value)}
                            required
                        />

                        <InputError message={errors.author} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="translator" value="Translator" />

                        <TextInput
                            id="translator"
                            name="translator"
                            value={data.translator}
                            placeholder={myNovels.translator}
                            className="mt-1 block w-full"
                            autoComplete="translator"
                            onChange={(e) =>
                                setData("translator", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.translator}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="status" value="Status" />

                        <TextInput
                            id="status"
                            name="status"
                            value={data.status}
                            placeholder={myNovels.status}
                            className="mt-1 block w-full"
                            autoComplete="status"
                            onChange={(e) => setData("status", e.target.value)}
                            required
                        />

                        <InputError message={errors.status} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="genre" value="Genre" />

                        <TextInput
                            id="genre"
                            name="genre"
                            value={data.genre}
                            placeholder={myNovels.genre}
                            className="mt-1 block w-full"
                            autoComplete="genre"
                            onChange={(e) => setData("genre", e.target.value)}
                            required
                        />

                        <InputError message={errors.genre} className="mt-2" />
                    </div>
                    <div className="relative my-2 flex justify-between">
                        {/* ... */}
                        <div>
                            {/* Tampilkan preview gambar */}
                            <label
                                htmlFor="image"
                                className="block font-medium text-gray-700 dark:text-gray-300"
                            >
                                Image
                            </label>
                            {!previewImage && myNovels.image ? (
                                <img
                                    src={"/e-book/" + myNovels.image}
                                    alt={"/e-book/" + myNovels.image}
                                    className="m-2 h-48 w-32 rounded-lg border-2 border-color-dark object-cover transition-all duration-500 hover:scale-105"
                                />
                            )
                            :
                                <img
                                    src={previewImage}
                                    alt="Preview"
                                    className="m-2 h-48 w-32 rounded-lg border-2 border-color-dark object-cover transition-all duration-500 hover:scale-105"
                                />
                            }

                            {/* {previewImage && (
                            )} */}
                            <input
                                id="image"
                                name="image"
                                type="file"
                                accept="image/*" // Hanya menerima file gambar
                                onChange={handleImageChange}
                                multiple
                                className="file-input file-input-bordered file-input-md m-2 w-full max-w-xs bg-slate-300 text-color-dark placeholder:text-color-dark"
                            />
                            {errors.image && (
                                <InputError
                                    message={errors.image}
                                    className="mt-2"
                                />
                            )}
                        </div>
                        <PrimaryButton
                            type="submit"
                            disabled={processing}
                            className="absolute bottom-0 right-0 mx-auto my-2 h-12 max-h-12 w-32 max-w-32 items-end justify-center px-6 text-center"
                            // onClick={handleSubmit}
                        >
                            Send
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormEditNovel;
