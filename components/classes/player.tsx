/** @format */

import { useState, useEffect } from 'react';
import useKeyPress from './key';
import Image from 'next/image';
import Sprite from 'public/images/sprite.png';

interface PlayerProps {
	x: number;
	y: number;
}

export default function Player({ x, y }: PlayerProps) {
	const [pos, setPos] = useState({ x, y });

	const { isDown, wasReleased } = useKeyPress();

	function handleMove(dir) {
		if (isDown(dir)) {
			// update position
		}
	}

	useEffect(() => {
		handleMove('left');
	}, [isDown, handleMove]);

	return (
		<div
			className='player'
			style={{
				left: pos.x,
				top: pos.y,
			}}>
			<Image src={Sprite} alt={'character'} />
		</div>
	);
}
