import React from 'react';
import '../style/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
    return (
        <div className='header'>
            <img 
                className='header_logo' alt='logo' 
                src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?fit=2560%2C1578&ssl=1"
            />
            <div className='header_search'>
                <input
                    className='header_searchInput'
                    type='text'
                />
                <SearchIcon
                className='header_searchIcon'/>
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span 
                    className='header_optionLineOne'>
                        hello Guest
                    </span>
                    <span 
                    className='header_optionLineTwo'>
                        Sign In
                    </span>

                </div>
                <div className='header_option'>
                    <span 
                        className='header_optionLineOne'>
                        return 
                    </span>
                    <span 
                        className='header_optionLineTwo'>
                        &orders
                    </span>
                </div>
                <div className='header_option'>
                    <span 
                        className='header_optionLineOne'>
                        Your 
                    </span>
                    <span 
                        className='header_optionLineTwo'>
                        Prime
                    </span>
                </div>
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon/>
                    <span className='header_optionLineTwo
                    header_basketCount'>0</span>



                </div>
            </div>
        </div>
    );
};

export default Header;