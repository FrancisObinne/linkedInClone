import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    
    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('Redux is powerful', 'Top News - 7943 readers')}
            {newsArticle('Covid-19 updates', 'Top News - 987 readers')}
            {newsArticle('Tesla hits new highs', 'Cars and auto - 438 readers')}
            {newsArticle('Bitcoin soaring', 'Crypto - 6087 readers')}
            {newsArticle('React components', 'Code - 88 readers')}
            {newsArticle('Firebase', 'Tech - 3492 readers')}
        </div>
    )
}

export default Widgets
