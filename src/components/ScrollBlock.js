import React, { useRef, useEffect, useState } from 'react';


const ScrollBlock = ({children, secondComp, thirdComp, runAnimations, runSecondAnimations}) => {
    const section = useRef()
    const [showComp, setShowComp] = useState(true)
    const [showSecondComp, setShowSecondComp] = useState(false)
    const [firstHeight, setFirstHeight] = useState(0)

    useEffect(() => {
        if(typeof window !== undefined) {
            const totalHeight = window.innerHeight
            setFirstHeight(totalHeight)
            window.addEventListener("scroll", () => {
                let scrollVal = window.scrollY;
                runAnimations()
                if(scrollVal >= totalHeight) {
                    setShowComp(false)
                    setShowSecondComp(true)
                    runSecondAnimations()
                }
                if (scrollVal < totalHeight) {
                    setShowComp(true)
                    setShowSecondComp(false)
                }
            });
        }
    }, [window, showComp])
	return (
        <>
        <section role="presentation" className='full-height' ref={section} style={{visibility: showComp ? 'visible' : 'hidden', height: showComp ? firstHeight : 0 }}>{children}</section>
        <section role="presentation" ref={section} style={{visibility: showSecondComp ? 'visible': 'hidden'}}>{secondComp}</section>
        <section role="presentation" ref={section} className='last' style={{visibility: showSecondComp ? 'visible' : 'hidden'}}>{thirdComp}</section>
        </>
	);
};

export default ScrollBlock
