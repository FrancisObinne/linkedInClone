import React from 'react'
import './testimonials.css'

function Testimonials() {
    const data = [
        {
            id: '1',
            name: 'Michael H',
            icon: 'assets/developer.jpg',
            title: 'Senior developer',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            img: 'assets/realtor-1.jpeg'
        },
        {
            id: '2',
            name: 'John Smith',
            icon: 'assets/developer.jpg',
            title: 'CEO of HKK',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            img: 'assets/talent.jpeg',
            featured: true
        },
        {
            id: '3',
            name: 'Susan J',
            icon: 'assets/developer.jpg',
            title: 'Co-founder NNE',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            img: 'assets/realtor-2.jpeg'
    }
]

    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className='container'>
                {data.map(data => (
                    <div key={data.id} className={data.featured ? 'card featured' : 'card'}>
                        <div className='top'>
                            <img src='assets/arrow.png' alt='' className='left' />
                            <img src={data.img} alt='' className='user'  />
                            <img src='assets/arrow.png' alt='' className='right'  />
                        </div>
                        <div className='center'>
                            {data.desc}
                        </div>
                        <div className='bottom'>
                            <h3>{data.name}</h3>
                            <h4>{data.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
