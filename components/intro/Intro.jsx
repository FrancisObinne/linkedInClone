import React, { useEffect, useRef } from 'react'
import './intro.css'
import { init } from 'ityped'

function Intro() {
    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Developer', 'Designer' ] })
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='imageContainer'>
                    <img src='assets/developer.jpg' alt='' />
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi There, I'm </h2>
                    <h1>Francis Obinne</h1>
                    <h3>Web <span ref={textRef}></span></h3>
                </div>
                <a href='#portfolio'>
                    <img src='assets/arrow.png' alt='' />
                </a>
            </div>
        </div>
    )
}

export default Intro
