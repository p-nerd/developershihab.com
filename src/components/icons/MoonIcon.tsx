import type { TIcon } from "@/types";

const MoonIcon: TIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="currentColor"
                d="M12.058 20q-3.334 0-5.667-2.333Q4.058 15.333 4.058 12q0-3.038 1.98-5.27Q8.02 4.5 10.942 4.097q.081 0 .159.006t.153.017q-.506.706-.801 1.57q-.295.865-.295 1.811q0 2.667 1.866 4.533q1.867 1.867 4.534 1.867q.952 0 1.813-.295q.862-.295 1.548-.801q.012.075.018.153q.005.078.005.158q-.384 2.923-2.615 4.904T12.057 20"
            />
        </svg>
    );
};

export default MoonIcon;