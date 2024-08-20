import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './css/landing.css'

// Render your React component instead
if (window && React) {
	window.addEventListener('DOMContentLoaded', () => {
		const root = createRoot(document.getElementById('root'));
		root.render(<App />);
	});
}
