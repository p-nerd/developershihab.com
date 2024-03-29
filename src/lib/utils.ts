import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const validateString = (value: unknown, maxLength: number): value is string => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return false;
    }

    return true;
};

const getErrorMessage = (error: unknown): string => {
    let message: string;

    if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        message = String(error.message);
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "Something went wrong";
    }

    return message;
};

const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

const format_date = (inputDate: string) => {
    const dateObject = new Date(inputDate);
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekday = weekdays[dateObject.getDay()];
    const monthName = dateObject.toLocaleString("en-US", { month: "long" });
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();
    return `${weekday}, ${monthName} ${day}, ${year}`;
};

export { validateString, getErrorMessage, cn, format_date };
