import dayjs from "dayjs";

export const formatDateToMonthDayYear = (date: Date) => {
    return dayjs(date).format("MMMM D, YYYY");
};

export const showProjectEndDate = (endDate: Date | null) => {
    return endDate ? formatDateToMonthDayYear(endDate) : "Present";
};

export const showProjectStartDate = (startDate: Date) => {
    return formatDateToMonthDayYear(startDate);
};
