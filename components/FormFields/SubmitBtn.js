import { Icon } from "@iconify/react";
import React from "react";

const SubmitBtn = ({ loading, className, txt = "Submit", icon }) => {
    return (
        <>
            <button
                type="submit"
                className={`${className} bg-primary px-4 py-2 rounded-lg text-white flex justify-center gap-2 items-center`}
                disabled={loading}
            >
                {!loading && txt && txt}
                {!loading && icon && (
                    <Icon
                        icon="fluent:send-32-regular"
                        width="1.7rem"
                        height="1.7rem"
                        className="mx-auto text-white"
                    />
                )}

                {loading && (
                    <div className="w-6 h-6 rounded-full animate-spin border-x-2 border-dashed border-white border-t-transparent"></div>
                )}
            </button>
        </>
    );
};

export default SubmitBtn;
