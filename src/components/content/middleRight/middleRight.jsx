import React from 'react';
import mr from './middleRight.module.css';
import PageMain from './pageMain/pageMain.jsx';
import PageDialogs from './pageDialogs/pageDialogs.jsx';
import { Route } from 'react-router-dom';

const MiddleRight = () => {
    return (
        <div className={mr.wrapperMiddleRight}>
            <Route exact path="/" component={PageMain}/>
            <Route path="/dialogs" component={PageDialogs}/>
        </div>
    );
}

export default MiddleRight;  