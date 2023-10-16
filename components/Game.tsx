/** @format */

import { useEffect } from 'react';
import { Map } from './maps/map';
import Player from './classes/player';
import Tile from './classes/tile';

export default function App() {
	useEffect(() => {
		// Load map data
		const map = Map;

		// Create tiles
		const tiles = [];
		for (let y = 0; y < map.length; y++) {
			for (let x = 0; x < map[y].length; x++) {
				const tile = new Tile(x, y);

				// update tile properties

				tiles.push(tile);
			}
		}

		// Create player
		const player = new Player();

		// Set initial state
		setMap(map);
		setTiles(tiles);
		setPlayer(player);
	}, []);

	return (
		<div className='game'>
			<Player />
			{tiles.map((tile) => (
				<Tile {...tile} />
			))}
		</div>
	);
}
