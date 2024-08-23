import React, { useRef, useEffect, useState } from 'react';


const ScrollBlock = ({children, secondComp, thirdComp, runAnimations}) => {
    const section = useRef()
    const [showComp, setShowComp] = useState(true)
    const [showSecondComp, setShowSecondComp] = useState(false)
    const [showThirdComp, setShowThirdComp] = useState(false)

    useEffect(() => {
        if(typeof window !== undefined) {
            window.addEventListener("scroll", () => {
                let scrollVal = window.scrollY;
                const totalHeight = window.innerHeight
                runAnimations()
                if(scrollVal >= totalHeight) {
                    setShowComp(false)
                    setShowSecondComp(true)
                    setShowThirdComp(false)
                }
                if (scrollVal < totalHeight) {
                    setShowComp(true)
                    setShowSecondComp(false)
                    setShowThirdComp(false)
                }
                if(scrollVal >= totalHeight + 1000) {
                    setShowComp(false)
                    setShowSecondComp(false)
                    setShowThirdComp(true)
                }
            });
        }
    }, [window, showComp])
	return (
        <>
        {showComp && (
            <section ref={section}>{children}</section>
        )}
        {showSecondComp && (
            <section ref={section}>{secondComp}</section>
        )}
        {showThirdComp && (
            <section ref={section}>{thirdComp}</section>
        )}
        </>
	);
};

export default ScrollBlock
