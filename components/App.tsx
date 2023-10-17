/** @format */

import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

export default function App() {
	const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
		loaderUrl: '/Build/pokemonWebGl.loader.js',
		dataUrl: '/Build/pokemonWebGL.data',
		frameworkUrl: '/Build/pokemonWebGL.framework.js',
		codeUrl: '/Build/pokemonWebGL.wasm',
	});

	const loadingPercentage = Math.round(loadingProgression * 100);
	return (
		<div className='container'>
			{isLoaded === false && (
				// We'll conditionally render the loading overlay if the Unity
				// Application is not loaded.
				<div className='loading-overlay'>
					<p>Loading... ({loadingPercentage}%)</p>
				</div>
			)}
			<Unity className='unity' unityProvider={unityProvider} />
		</div>
	);
}
