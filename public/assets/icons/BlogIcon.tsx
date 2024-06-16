import * as React from "react";
import type { SVGProps } from "react";
const BlogIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={14}
		height={15}
		fill="none"
		{...props}
	>
		<path
			fill="#7D8590"
			d="M5.25.403v1.312a7.4 7.4 0 0 1 5.26 2.178 7.4 7.4 0 0 1 2.178 5.26H14A8.75 8.75 0 0 0 5.25.402"
		/>
		<path
			fill="#7D8590"
			d="M5.25 3.028V4.34c1.286 0 2.494.5 3.403 1.41a4.78 4.78 0 0 1 1.41 3.403h1.313A6.125 6.125 0 0 0 5.25 3.028m1.313 2.625-.875.875-3.063.875L0 13.09l.347.347 3.183-3.183a.875.875 0 1 1 .619.618L.965 14.056l.347.346L7 11.777l.875-3.063.875-.875-2.188-2.187"
		/>
	</svg>
);
export default BlogIcon;
