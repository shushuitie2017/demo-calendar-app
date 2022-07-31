import './NotFound.css'
import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './daddy.json';
export const NotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    /*
    return (
        <div className="notFoundmain">
            <h1>404</h1>
            <h2>お探しのページは見当たりません</h2>
        </div>
    )
    */
    return (
        <div className="notFoundmain">
            <Lottie options={defaultOptions} height={200} width={200} />
            <h1>404</h1>
            <h2>お探しのページは見当たりません</h2>
        </div>
    );

};

/*
<div className="notFoundmain">
            <h1>404</h1>
            <h2>お探しのページは見当たりません</h2>
        </div>
*/

