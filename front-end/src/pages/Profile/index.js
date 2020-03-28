import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
// import {Link} from 'react-router-dom';

export default function Register() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, APAD</span>
            </header>
        </div>
    );
}