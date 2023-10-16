/** @format */

import { useState } from 'react';
import Image from 'next/image';

interface TileProps {
	x: number;
	y: number;
	tileX: number;
	tileY: number;
	width: number;
	height: number;
}

export default function Tile({ x, y, tileX, tileY, width, height }: TileProps) {
	const [displayed, setDisplayed] = useState(false);

	function getTileSprite() {
		// logic to get sprite
	}

	return (
		<div
			className='tile'
			style={{
				position: 'absolute',
				left: x,
				top: y,
				width: width,
				height: height,
			}}>
			{displayed && <Image src={getTileSprite()} />}
		</div>
	);
}
