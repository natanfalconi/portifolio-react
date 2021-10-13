import '../styles/header.css';
import logo from '../assets/code-logo.png'
import cofeLogo from '../assets/cofe-code.png'

import { AiFillFacebook } from 'react-icons/all';
import { FiInstagram } from 'react-icons/all';
import { AiFillLinkedin } from 'react-icons/all';
import { AiFillGithub } from 'react-icons/all';

export function Header() {
    return (
        <header>
            <div className="content">
                <div className="logo-content" >
                    <img src={logo} alt="" />
                </div>

                <nav className="sidebar">
                    <ul className="menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">Sobre</a></li>
                        <li><a href="">Projetos</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </nav>

                <nav className="social" >
                    <div className="social-link">
                        <a href="">
                            <AiFillLinkedin />
                        </a>
                        <a href="">
                            <AiFillGithub />
                        </a>
                        <a href="">
                            <FiInstagram />
                        </a>
                        <a href="">
                            <AiFillFacebook />
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )

}