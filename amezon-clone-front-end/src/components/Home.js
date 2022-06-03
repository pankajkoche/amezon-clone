import React from 'react';
import '../style/Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image'
                    src="https://glenfieldmall-prod-images.imgix.net/Lady-running-with-bags-Full-Header-1320-x-650.jpg?ar=&fit=clip&fp-x=0.5&fp-y=0.5&h=650&ixlib=php-2.1.1&w=1320"
                    alt='background' 
                />
            </div>
        </div>
    );
};

export default Home;