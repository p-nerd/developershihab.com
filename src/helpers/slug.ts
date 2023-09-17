export const slugify = (text: string): string => {
    // Remove leading and trailing spaces, convert to lowercase
    const cleanedInput = text.trim().toLowerCase();

    // Replace spaces and special characters with hyphens using a regular expression
    const slug = cleanedInput.replace(/[^a-zA-Z0-9-]+/g, "-");

    // Remove consecutive hyphens and leading/trailing hyphens
    return slug.replace(/^-+|-+$/g, "");
};

export const deslugify = (slug?: string): string => {
    if (!slug) return "";

    // Replace hyphens with spaces
    const text = slug.replace(/-/g, " ");

    // Capitalize the first letter of each word
    return text.replace(/(?:^|\s)\S/g, match => match.toUpperCase());
};
