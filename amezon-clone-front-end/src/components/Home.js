import React from 'react';
import '../style/Home.css'
import Product from './Product';

const Home = () => {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image'
                    src="https://glenfieldmall-prod-images.imgix.net/Lady-running-with-bags-Full-Header-1320-x-650.jpg?ar=&fit=clip&fp-x=0.5&fp-y=0.5&h=650&ixlib=php-2.1.1&w=1320"
                    alt='background' 
                />
            
            <div className='home_row'>
                <Product title="Amezon alexa make your life smart"
                    price={23.99}
                    rating={5}
                    image="https://cdn.shopify.com/s/files/1/0608/4988/1306/products/1_9b8014ad-124e-4742-a628-9a4c4affe617_1400x.jpg?v=1648711109"/>
                <Product
                title={"IPhone 13 pro good diplay quality extra battery life"}
                price={23.99}
                rating={5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdSfAe9rFv7O03IuiNZTDxETFkIZZm6Ra3A&usqp=CAU"/>
            </div>
            <div className='home_row'>
                <Product
                title={"This is a ververy good fruits juice machine "}
                price={23.99}
                rating={5}
                image="https://rukminim1.flixcart.com/image/416/416/jlph9jk0/mixer-grinder-juicer/s/z/z/vmoni-fruit-juice-machine-fruit-juice-maker-rechargeable-juice-original-imaf8rbryvderzhk.jpeg?q=70"/>
                <Product
                title={"Mack book pro A super laptop "}
                price={23.99}
                rating={5}
                image=
                "https://images.prismic.io/frameworkmarketplace/cca31de3-3b75-4932-af96-7646b7eba6c7__DSC3630-Edit-cropped.jpg?auto=compress,format"/>
                <Product
                title={" fashionable men’s clothing "}
                price={23.99}
                rating={5}
                image=
                "https://www.influencive.com/wp-content/uploads/2021/05/mens-clothes-buying-guides-758x493.jpeg"/>
                 
            </div>
            <div className='home_row'>
            
            <Product
            title={"most comfortable king size bed help to increse your sleep"}
                price={23.99}
                rating={5}
                image=
                "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFoQjEzeDNIdFMuX0FDX1NMMTUwMF8uanBn.jpg"/>
               
            </div>
             <div className='home_row'>
            
                <Product/>
            </div>
        </div>
    </div>
    );
};

export default Home;