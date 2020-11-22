import React, {useState} from "react";
import './Card.scss'
import BlockWrapper from "../BlockWrapper";
import {onSelectRetail} from "../../actions";
import {connect} from "react-redux";

const Card = (props) => {
  const data = [
    {id: 1, value: 'значение 1'},
    {id: 2, value: 'значение 2'},
    {id: 3, value: 'значение 3'},
    {id: 4, value: 'значение 4'},
    {id: 5, value: 'значение 5'},
    {id: 6, value: 'значение 6'},
    {id: 7, value: 'значение 7'},
    {id: 8, value: 'значение 8'}
  ]
  const city = [
    {id: 1, value: 'Москва'},
    {id: 2, value: 'Санкт-Петербург'},
    {id: 3, value: 'Казань'},
    {id: 4, value: 'Екатеринбург'},
    {id: 5, value: 'Нижний Новгород'},
    {id: 6, value: 'Владимир'},
    {id: 7, value: 'Ярославль'},
    {id: 8, value: 'Сочи'}
  ]
  const shelter = [
    {id: 1, value: 'Лапки'},
    {id: 2, value: 'Хвостики'},
    {id: 3, value: 'Верность'},
    {id: 4, value: 'Ушастики'},
    {id: 5, value: 'Бим'},
    {id: 6, value: 'Ника'},
    {id: 7, value: 'Зов Предков'},
    {id: 8, value: 'Белый клык'}
  ]
  const animals = [
    {id: 1, value: 'Собаки'},
    {id: 2, value: 'Кошки'},
    {id: 3, value: 'Грызуны'},
    {id: 4, value: 'Ежики'},
    {id: 5, value: 'Хрюшки'},
    {id: 6, value: 'Лошадки'},
    {id: 7, value: 'Кролики'},
    {id: 8, value: 'Птицы'}
  ]

  const [year, setYear] = useState(2)

  const setText = (i) => {
    let text = '1 год'
    if (i > 1) {
      text = `${i} года`
    }
    if (i > 4) {
      text = `${i} лет`
    }
    return text
  }

  return (
    <BlockWrapper title='Форма суммы сборов' classStyle='indexMobile__textBlock'>
      <div className='Cards__selectContainer'>
        <p className='Cards__titleInput'>Город</p>
        <select name={"Cards-retails" + Math.random().toFixed(6)}
                id={"Cards-retails" + Math.random().toFixed(6)}
                className="Cards__select"
                value={props.city}
                onChange={(e) => props.onSelectRetail('city', e.target.value)}
        >
          {city.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.value}
                </option>
              )
            }
          )}
        </select>

        <p className='Cards__titleInput'>Приют</p>
        <select name={"Cards-retails" + Math.random().toFixed(6)}
                id={"Cards-retails" + Math.random().toFixed(6)}
                className="Cards__select"
                value={props.checked}
                onChange={props.onChange}
        >
          {shelter.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.value}
                </option>
              )
            }
          )}
        </select>

        <p className='Cards__titleInput'>Вид животного</p>
        <select name={"Cards-retails" + Math.random().toFixed(6)}
                id={"Cards-retails" + Math.random().toFixed(6)}
                className="Cards__select"
                value={props.checked}
                onChange={props.onChange}
        >
          {animals.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.value}
                </option>
              )
            }
          )}
        </select>

        <p className='Cards__titleInput'>Возраст: {setText(year)}</p>
        <input
          className="Cards__range"
          type="range"
          min="1" max="15"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

      </div>
      <div className='Cards__main'>
        {props.children}
      </div>

      <button className='Cards__button'
              onClick={props.onClick}
      >
        Применить
      </button>
    </BlockWrapper>
  )
}

const mapStateToProps = ({city}) => {
  return {city}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectRetail: (type, id) => dispatch(onSelectRetail(type, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)