import React from "react";
import './BlockWrapper.scss'
import hashtagSolid from '../../image/hashtag-solid.svg'


const BlockWrapper = ({
                        children, text = null, title, classStyle = '', onClick = () => {
  }
                      }) => {
  return (
    <div className={'BlockWrapper ' + `${classStyle}`} onClick={onClick}>
      <div className='BlockWrapper__title'>
        {text
          ? <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}><span>{text}</span> <span style={{color: '#000'}}>Общая сумма: 51 762р</span></div>
          : <img src={hashtagSolid} alt="hashtag"/>}
        <span>{title}</span>
      </div>
      {children}
    </div>
  )
}

export default BlockWrapper