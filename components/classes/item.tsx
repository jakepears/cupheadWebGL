/** @format */

import { useState } from 'react';

interface ItemProps {
	id: number;
	name: string;
	x: number;
	y: number;
}

export default function Item({ id, name, x, y }: ItemProps) {
	const [position, setPosition] = useState({ x, y });

	function moveUp(pixels: number) {
		setPosition((pos) => ({
			...pos,
			y: pos.y - pixels,
		}));
	}

	// other move functions

	return (
		<div
			className={`item-${name}`}
			style={{
				left: `${position.x}px`,
				top: `${position.y}px`,
			}}>
			<p className='text-sm'>Id: {id}</p>
			<p className='text-sm'>X: {position.x}</p>
			<p className='text-sm'>Y: {position.y}</p>
		</div>
	);
}
