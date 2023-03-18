import React, { Suspense } from "react";
//fix this later
import { Spinner } from "../components/spinner";
// import { Spinner } from "@src/components/spinner";

interface IProps {
	children: React.ReactNode;
}

export const PagesWrapper: React.FC<IProps> = ({ children }) => {
	return (
		<div>
			<Suspense fallback={<Spinner />}>{children}</Suspense>
		</div>
	);
};
