import type { TIcon } from '@/types';

const TmuxIcon: TIcon = (props) => {
	return (
		<svg
			fill="none"
			height="2500"
			width="2500"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 160 160"
			{...props}
		>
			<g clip-rule="evenodd" fill-rule="evenodd">
				<path
					d="M0 116h160v28.996c0 8.287-6.722 15.004-14.998 15.004H14.998C6.716 160 0 153.293 0 144.996zm0 0h160v30H0z"
					fill="#1bb91f"
				/>
				<path
					d="M83 70V0h-6v146h6V76h77v-6zM0 15.007C0 6.719 6.722 0 14.998 0h130.004C153.285 0 160 6.725 160 15.007V146H0z"
					fill="#3c3c3c"
				/>
			</g>
		</svg>
	);
};

export default TmuxIcon;