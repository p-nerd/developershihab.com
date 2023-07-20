import dayjs from "dayjs";

export const formatDateToMonthDayYear = (date: Date) => {
    return dayjs(date).format("MMMM D, YYYY");
};

export const getCurrentYear = () => {
    return new Date().getFullYear();
};
