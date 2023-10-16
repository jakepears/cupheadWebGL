/** @format */

import { useState, useEffect } from 'react';

export default function Game() {
	const [loaded, setLoaded] = useState(false);
	const [paused, setPaused] = useState(false);
	const [currentState, setCurrentState] = useState('');
	const [states, setStates] = useState({});

	useEffect(() => {
		// init game here
		setLoaded(true);

		const handleKeyDown = (e: KeyboardEvent) => {
			// keydown logic
		};

		const handleKeyUp = (e: KeyboardEvent) => {
			// keyup logic
		};

		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('keyup', handleKeyUp);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('keyup', handleKeyUp);
		};
	}, []);

	useEffect(() => {
		let interval: any;

		if (loaded && !paused) {
			interval = setInterval(() => {
				// loop logic
			}, 1000 / 60);
		}

		return () => clearInterval(interval);
	}, [loaded, paused]);

	return <div id='game'>{/* render game */}</div>;
}
