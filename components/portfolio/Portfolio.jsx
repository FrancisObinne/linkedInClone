import React, { useEffect, useState } from 'react'
import './portfolio.css'
import PortfolioList from './../portfolioList/PortfolioList'
import {
    featuredPortfolio,
    reactPortfolio,
    nodejsPortfolio,
    designPortfolio
} from './../../data'


function Portfolio() {
    const [selected, setSelected] = useState('featured')
    const [data, setData] = useState([])

    const list = [
        {
            id: 'featured',
            title: 'Featured'
        },
        {
            id: 'react',
            title: 'React'
        },
        {
            id: 'nodejs',
            title: 'Nodejs'
        },
        {
            id: 'design',
            title: 'Design'
        }
    ]

    useEffect(() => {
        switch(selected) {
            case 'featured':
                setData(featuredPortfolio);
                break;
            case 'react':
                setData(reactPortfolio);
                break;
            case 'nodejs':
                setData(nodejsPortfolio);
                break;
            case 'design':
                setData(designPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList key={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
                ))}
            </ul>
            <div className='container'>
                {data.map(data => (
                    <a href={data.url}>
                        <div key={data.id} className='item'>
                            <img src={data.img} alt='' />
                            <h3>{data.title}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
