import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

export const formatDate = (inputDate: string) => {
    const dateObject = new Date(inputDate);
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekday = weekdays[dateObject.getDay()];
    const monthName = dateObject.toLocaleString("en-US", { month: "long" });
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();
    return `${weekday}, ${monthName} ${day}, ${year}`;
};
