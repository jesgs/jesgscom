import React from 'react'
import { createRoot } from 'react-dom/client';

// Render your React component instead
if (window && React) {
	window.addEventListener('DOMContentLoaded', () => {
		const root = createRoot(document.getElementById('root'));
		console.log(document.getElementById('root'));
		root.render(<h1>Hello, world</h1>);
	});
}
