import type { TIcon } from "~/types/utils";

const ChevronRightIcon: TIcon = (props) => {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M6.75 5.75 9.25 8l-2.5 2.25"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export { ChevronRightIcon };
