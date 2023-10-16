/** @format */

import { useState, useEffect } from 'react';

interface KeyState {
	[key: number]: boolean;
}

export default function useKeyPress() {
	const [keyPressed, setKeyPressed] = useState<KeyState>({});

	useEffect(() => {
		const downHandler = ({ keyCode }: KeyboardEvent) => {
			setKeyPressed((prev) => ({ ...prev, [keyCode]: true }));
		};

		const upHandler = ({ keyCode }: KeyboardEvent) => {
			setKeyPressed((prev) => ({ ...prev, [keyCode]: false }));
		};

		document.addEventListener('keydown', downHandler);
		document.addEventListener('keyup', upHandler);

		return () => {
			document.removeEventListener('keydown', downHandler);
			document.removeEventListener('keyup', upHandler);
		};
	}, []);

	function isDown(keyCode: number) {
		return !!keyPressed[keyCode];
	}

	function wasReleased(keyCode: number) {
		return !keyPressed[keyCode] && keyCode in keyPressed;
	}

	return {
		isDown,
		wasReleased,
	};
}
