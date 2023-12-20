const get_current_year = () => new Date().getFullYear();

const CopyrightYear = () => {
    return <span>{get_current_year()}</span>;
};

export default CopyrightYear;
