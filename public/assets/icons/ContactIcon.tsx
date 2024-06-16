import * as React from "react";
import type { SVGProps } from "react";
const ContactIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={16}
		height={19}
		fill="none"
		{...props}
	>
		<path
			stroke="#7D8590"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.235}
			d="M4.706 2.814V1.167m6.588 1.647V1.167M8 17.637c-3.3 0-4.95 0-5.975-1.085S1 13.719 1 10.226c0-3.494 0-5.241 1.025-6.327C3.051 2.814 4.7 2.814 8 2.814s4.95 0 5.975 1.085C15 4.985 15 6.732 15 10.226s0 5.24-1.025 6.326C12.949 17.637 11.3 17.637 8 17.637"
		/>
		<path
			stroke="#7D8590"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.235}
			d="M9.662 7.337a1.647 1.647 0 1 1-3.294 0 1.647 1.647 0 0 1 3.294 0m-4.904 5.949c.871-1.342 2.255-1.845 3.257-1.844 1.001 0 2.345.502 3.217 1.845.056.086.071.192.02.283-.203.361-.837 1.079-1.293 1.127-.525.056-1.9.064-1.943.064s-1.46-.008-1.985-.064c-.458-.049-1.09-.765-1.295-1.128-.05-.09-.034-.196.022-.283"
		/>
	</svg>
);
export default ContactIcon;
