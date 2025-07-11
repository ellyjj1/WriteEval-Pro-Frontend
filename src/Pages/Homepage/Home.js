import React from 'react'
import BannerBackground from "../../Assets/home-banner-background.png";
import BannerImage from "../../Assets/home-banner-image.png";
import Ad from './Ad';
import Hero from "./Hero";



function Home() {

    return (
        <div className='home-container'>
            <div className='home-banner-container'>
                <div className='home-bannerImage-container'>
                    <img src={BannerBackground} alt="" />
                </div>
                <div className='home-text-section'>
                    <h1 className='primary-heading'>
                        Make All Your Dream Come True!
                    </h1>
                    <p className='primary-text'>
                        Achieve your dream IELTS Writing and unlock a world of opportunities, taking you wherever your heart desires!
                    </p>
                    <a href="/evaluate">
                        <button className='px-6 py-3 rounded-2xl' >
                            Evaluate your IELTS Writing
                        </button>
                    </a>

                </div>
                <div className='home-image-section'>
                    <img src={BannerImage} alt=''/>
                </div>
            </div>
            <Ad />
            <Hero />
        </div>
    )
}

export default Home