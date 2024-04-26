import hotToast, { Toaster as HotToaster } from "react-hot-toast";

export const Toaster = () => {
    return <HotToaster position="top-right" />;
};

const toast = {
    error: (message: string) => {
        hotToast.error(message);
    },
    success: (message: string) => {
        hotToast.success(message);
    },
};

export default toast;
