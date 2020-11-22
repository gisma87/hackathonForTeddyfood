import React from "react";
import './Board.scss'
import BlockWrapper from "../BlockWrapper";

const Board = () => {
  return (
    <BlockWrapper classStyle='Board'
                  text='Результаты и рекомендации'
    >
      <div className='Board__main'>
        <div>
          <p className='Board__paragraph1'>Собирают больше всего пожертвований</p>
          <ul>
            <ol>1. Вася</ol>
            <ol>2. Барсик</ol>
            <ol>3. Муха</ol>
          </ul>
          <p className='Board__paragraph2'>Меньше всего жертвуют им :(</p>
          <ul>
            <ol>1. Муся</ol>
            <ol>2. Сёма</ol>
            <ol>3. Жора</ol>
          </ul>
        </div>

        <div>
          <p className='Board__rating'>
            Расчёты рейтинга строились на основании следующих показателей:
            <span>- Количество добавлений в избранное</span>
            <span>- Количество людей, желающих забрать питомца домой</span>
            <span>- Сколько людей взяли питомца на прогулку</span>
            <span>- Количество посетителей страницы животного</span>
          </p>
          <p>
            <b>Cовет:</b> чтобы увеличить объём пожертвований на животных, нужно сделать Промо для животных из ТОП 3
            этого списка
          </p>
        </div>
      </div>
    </BlockWrapper>
  )
}

export default Board