import React, { useState } from 'react'
import './works.css'

function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
            id: '1',
            icon: 'assets/developer.jpg',
            title: 'Design + Development',
            desc: 'I help create interactive web experiences using the latest technologies, to ensure they display on all devices.',
            img: 'assets/IT-startup.jpg'
        },
        {
            id: '2',
            icon: 'assets/developer.jpg',
            title: 'E-commerce',
            desc: 'I build high performing websites that convert visitors into customers.',
            img: 'assets/About Us.jpg'
        },
        {
            id: '3',
            icon: 'assets/developer.jpg',
            title: 'Wordpress',
            desc: 'My sites have a CMS that allows you to easily keep your website up to date.',
            img: 'assets/developer.jpg'
        }
    ]

    const handleClick = (way) => {
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className='works' id='works'>
            <div className='slider' style={{
                transform: `translateX(-${currentSlide * 100}vw)`
            }}>
                {data.map(data => (
                    <div className='container'>
                        <div className='item'>
                            <div className='left'>
                                <div className='leftContainer'>
                                    <div className='imgContainer'>
                                        <img src={data.icon} alt='' />
                                    </div>
                                        <h2>{data.title}</h2>
                                        <p>{data.desc}
                                        </p>
                                        {/* <span>Projects</span> */}
                                </div>
                             </div>
                            <div className='right'>
                                {/* <img src='assets/developer.jpg' alt='' /> */}
                                <img src={data.img} alt='' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src='assets/arrow.png' alt='' className='arrow left' onClick={() => handleClick('left')} />
            <img src='assets/arrow.png' alt='' className='arrow right' onClick={() => handleClick()} />
        </div>
    )
}

export default Works
