import React from "react";
import './HelpIntro.scss'
import intro1 from '../../image/intro-1.svg'
import intro2 from '../../image/intro-2.svg'
import intro3 from '../../image/intro-3.svg'
import intro4 from '../../image/intro-4.svg'
import introArrow from '../../image/intro-arrow.png'

const HelpIntro = () => {
  return (
    <div className="HelpIntro" >
      <div className="HelpIntro__wrapper" >
        <h1 className="HelpIntro__title">Помогайте бездомным животным онлайн</h1>

        <div className="HelpIntro__list">
          <div className="HelpIntro__item">
              <img src={intro1} alt=""  className='HelpIntro__image' />
              <div className="HelpIntro__name"> Выбери питомца</div>
          </div>

          <img src={introArrow} className="HelpIntro__arrow" alt='arrow' />

          <div className="HelpIntro__item">
              <img src={intro2} alt="" className='HelpIntro__image' />
              <div className="HelpIntro__name"> Купи ему угощение</div>
          </div>

          <img src={introArrow} className="HelpIntro__arrow" alt='arrow' />

          <div className="HelpIntro__item">
              <img src={intro3} alt="" className='HelpIntro__image' />
              <div className="HelpIntro__name"> Следи за ним онлайн</div>
          </div>

          <img src={introArrow} className="HelpIntro__arrow" alt='arrow' />

          <div className="HelpIntro__item">
              <img src={intro4} alt="" className='HelpIntro__image' />
              <div className="HelpIntro__name">Радуйся вместе с ним и получай баллы</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HelpIntro