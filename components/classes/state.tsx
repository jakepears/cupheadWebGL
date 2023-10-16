/** @format */

import { ReactNode } from 'react';

interface StateProps {
	name: string;
	children: ReactNode;
}

export default function State({ name, children }: StateProps) {
	return <div id={`state-${name}`}>{children}</div>;
}
