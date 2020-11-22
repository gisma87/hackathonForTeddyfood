import React from "react";
import './Card.scss'
import BlockWrapper from "../BlockWrapper";

const Card = (props) => {
  return (
    <BlockWrapper title='название' classStyle='indexMobile__textBlock'>
      <div className='Cards__selectContainer'>
        <p className='Cards__titleInput'>Выберите значение</p>
        <select name={"Cards-retails" + Math.random().toFixed(6)}
                id={"Cards-retails" + Math.random().toFixed(6)}
                className="Cards__select"
                value={props.checked}
                onChange={props.onChange}>
          {props.data.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.value}
                </option>
              )
            }
          )}
        </select>
      </div>
      <div>
        {props.children}
      </div>
    </BlockWrapper>
  )
}

export default Card