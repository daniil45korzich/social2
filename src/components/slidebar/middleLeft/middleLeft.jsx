import React from 'react';
import { NavLink } from 'react-router-dom';
import ml from './middleLeft.module.css';

const MiddleLeft = () => {
    return (
        <div className={ml.wrapperMiddleLeft}>
            <ul className={ml.ul}>
                <li>
                    <NavLink to="/">Главная</NavLink>
                </li>
                <li>Portfolio</li>
                <li>
                    <NavLink to="/dialogs">Чаты</NavLink>
                </li>
                <li>Music</li>
            </ul>
          </div>
    );
}

export default MiddleLeft;