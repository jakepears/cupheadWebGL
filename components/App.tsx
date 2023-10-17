/** @format */

import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

export default function App() {
	const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
		loaderUrl: '/Build/cupWeb.loader.js',
		dataUrl: '/Build/cupWeb.data',
		frameworkUrl: '/Build/cupWeb.framework.js',
		codeUrl: '/Build/cupWeb.wasm',
	});

	const loadingPercentage = Math.round(loadingProgression * 100);
	return (
		<div className='container'>
			{isLoaded === false && (
				// We'll conditionally render the loading overlay if the Unity
				// Application is not loaded.
				<div className='top-0 left-0 '>
					<p>Loading... ({loadingPercentage}%)</p>
				</div>
			)}
			<Unity className='unity' unityProvider={unityProvider} />
		</div>
	);
}
