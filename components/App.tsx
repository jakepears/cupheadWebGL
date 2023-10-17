/** @format */

import React from 'react';
import UnityProgress from './TemplateData/UnityProgress';
import { UnityLoader } from './Build/UnityLoader';
import Image from 'next/image';
import WebGlLogo from '@/public/images/webgl-logo.png';
import FullScreen from '@/public/images/fullscreen.png';

export default function App() {
	const gameInstance = UnityLoader.instantiate(
		'gameContainer',
		'Build/WebGL.json',
		{ onProgress: UnityProgress }
	);

	return (
		<body>
			<div className='webgl-content'>
				<div id='gameContainer' className='w-screen h-screen'></div>
				<div className='footer'>
					<div className='webgl-logo'>
						<Image src={WebGlLogo} alt='WebGL Logo' width={100} height={100} />
					</div>
					<div
						className='fullscreen'
						onClick={() => gameInstance.SetFullscreen(1)}>
						<Image src={FullScreen} alt='Fullscreen' width={100} height={100} />
					</div>
					<div className='title'>Pokémon Unity</div>
				</div>
			</div>
		</body>
	);
}
