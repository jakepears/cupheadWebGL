/** @format */

import { useState } from 'react';
import Image from 'next/image';
import Sprite from '/public/images/tiles.png';
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
		return `url(${Sprite}) -${tileX * 32}px -${tileY * 32}px`;
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
			{displayed && <Image src={getTileSprite()} alt='Tile Sprite' />}
		</div>
	);
}
