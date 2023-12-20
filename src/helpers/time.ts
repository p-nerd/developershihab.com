export const get_current_year = (): number => {
    return new Date().getFullYear();
};

export const format_date_to_month_day_year = (date: Date): string => {
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(date);
};

export const show_project_end_date = (endDate: Date | null) => {
    return endDate ? format_date_to_month_day_year(endDate) : "Present";
};

export const show_project_start_date = (startDate: Date) => {
    return format_date_to_month_day_year(startDate);
};
