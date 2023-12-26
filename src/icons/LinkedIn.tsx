import type { TIcon } from "@/helpers/types";

const LinkedIn: TIcon = p => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            aria-hidden="true"
            stroke="currentcolor"
            fill="currentcolor"
            class={p.class}
        >
            <g>
                <rect
                    width="184"
                    height="184"
                    x="36"
                    y="36"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                    rx="8"
                ></rect>
                <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                    d="M120 112v64m-32-64v64m32-36a28 28 0 0 1 56 0v36"
                ></path>
                <circle stroke="none" cx="88" cy="80" r="12"></circle>
            </g>
        </svg>
    );
};

export default LinkedIn;
