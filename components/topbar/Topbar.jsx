import React from 'react'
import './topbar.css'
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';

function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>Obinne.</a>
                    <div className='itemContainer'>
                        <PersonIcon className='icon' />
                        <span>+2348076420961</span>
                    </div>
                    <div className='itemContainer'>
                        <MailIcon className='icon' />
                        <span>obinne.francis@gmail.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
