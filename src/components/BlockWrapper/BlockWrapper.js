import React from "react";
import './BlockWrapper.scss'
import hashtagSolid from '../../image/hashtag-solid.svg'


const BlockWrapper = ({children, title, classStyle = '', onClick = () => {}}) => {
    return (
        <div className={'BlockWrapper ' + `${classStyle}`} onClick={onClick}>
            <div className='BlockWrapper__title'>
              <img src={hashtagSolid} alt="hashtag"/>
              <span>{title}</span>
            </div>
            {children}
        </div>
    )
}

export default BlockWrapper