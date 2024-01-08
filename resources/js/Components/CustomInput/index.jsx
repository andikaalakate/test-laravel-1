import React from "react";

const CustomInput = ({
    type,
    placeholder,
    className,
    onChange,
    fileInput,
    value,
    ...rest
}) => {
    const inputProps = {
        type: type || "text",
        placeholder: placeholder || "",
        className:
            className ||
            "input input-bordered input-md bg-slate-300 text-color-dark placeholder:text-color-dark w-full m-2",
        onChange: onChange || (() => {}),
        value: value || "",
        ...rest, // Menggunakan rest operator untuk menangani properti tambahan
    };

    if (fileInput) {
        return (
            <input
                {...inputProps}
                type="file"
                className="file-input file-input-bordered file-input-md m-2 w-full max-w-xs bg-slate-300 text-color-dark placeholder:text-color-dark"
            />
        );
    }

    return <input {...inputProps} />;
}

export default CustomInput;
