/** @format */

import { useState } from 'react';
import State from './state';
import Player from './player';

export default function App() {
	const [character, setCharacter] = useState(0);

	return (
		<>
			<div className='controls'>
				<select
					value={character}
					onChange={(e) => setCharacter(parseInt(e.target.value, 10))}>
					<option value={0}>Character 0</option>
					<option value={1}>Character 1</option>
				</select>
			</div>

			<State name='state-name'>
				<Player character={character} x={0} y={0} />
			</State>
		</>
	);
}
