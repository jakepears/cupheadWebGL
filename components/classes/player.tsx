/** @format */

import { useState } from 'react';
import { Character, Direction } from '@types';
import Image from 'next/image';

interface PlayerProps {
	x: number;
	y: number;
	character: Character;
}

export default function Player({ x, y, character }: PlayerProps) {
	const [pos, setPos] = useState({ x, y });
	const [dir, setDir] = useState<Direction>(Direction.Down);

	function handleMove(dir: Direction) {
		// update position based on move
	}

	function getSprite(): string {
		// logic to get sprite
		return '';
	}

	return (
		<div
			className='player'
			style={{
				left: pos.x,
				top: pos.y,
			}}>
			<Image src={getSprite()} alt={character} />
		</div>
	);
}
