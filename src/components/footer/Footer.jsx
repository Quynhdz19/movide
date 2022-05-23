import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">QMovies</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__contribute">
                        <a href="https://docs.google.com/forms/d/1EfD0owgVBNE2aAOu344Macn7HpfCEW2sYmpZ1-PKogo/edit">
                            CONTRIBUTE
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
