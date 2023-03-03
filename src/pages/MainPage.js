import React from 'react'
import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
  return (
    <div className='inner_container'>
        <div className='section1'>
            <div className='img_contain'>
                <img className='main_img' alt='' src='/img/main_img.png'/>
                    <img className='pos_abs_1st' alt='' src='/img/line.png'/>
                    <img className='pos_abs_2nd' alt='' src='/img/Vector.png'/>
                    <img className='pos_abs_3rd' alt='' src='/img/beer_store.png'/>

                    <h2><Link to='/allprd'>TOUCH TO ORDER</Link></h2>
            </div>
        </div>
    </div>
  )
}

export default MainPage
