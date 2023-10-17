/** @format */
'use client';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

export default function CupGame() {
	const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
		loaderUrl: '/Build/cupWeb.loader.js',
		dataUrl: '/Build/cupWeb.data',
		frameworkUrl: '/Build/cupWeb.framework.js',
		codeUrl: '/Build/cupWeb.wasm',
	});

	const loadingPercentage = Math.round(loadingProgression * 100);
	return (
		<div className='flex items-center content-center h-screen w-screen'>
			{isLoaded === false && (
				// We'll conditionally render the loading overlay if the Unity
				// Application is not loaded.
				<div className='top-0 left-0 items-center content-center'>
					<p>Loading... ({loadingPercentage}%)</p>
				</div>
			)}
			<Unity
				className='h-full w-full place-content-center'
				unityProvider={unityProvider}
			/>
		</div>
	);
}
