import React, { useRef } from 'react';
import ScrollBlock from './ScrollBlock.js';

const BlockTwo = () => {
    const blockTwo = useRef()
    const handleAnimations = () => {
        let scrollVal = window.scrollY;
        if(blockTwo.current) {
            blockTwo.current.style.transform = `translate(${-50 - scrollVal / 2}px, 0%)`;
        }
    }

    return <ScrollBlock runAnimations={handleAnimations}>
            <div class='block two' ref={blockTwo}>
            <img
                className='jegs-logo'
                alt=''
                src='./assets/images/logo.png'
            />
            <h2>What we do</h2>
            <ul>
                <li>Custom development</li>
                <li>Custom Block Themes</li>
                <li>Custom Classic Themes</li>
                <li>Custom Plugins</li>
                <li>Web Design: websites, e-commerce help, and more!</li>
                <li>Web Develpment: Animations, forms, and more!</li>
            </ul>
            </div>
		</ScrollBlock>
}
export default BlockTwo



