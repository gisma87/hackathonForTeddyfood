import React from "react";
import './AskQuestion.scss'
import {Link} from "react-router-dom";

const AskQuestion = () => {


  const setStatusText = (target) => {
    console.log(target.value)
  }


  return (
    <div className='AskQuestion wrapper'>

      <form onSubmit={(e) => {
        e.preventDefault()
        e.target.reset()
      }}
            onChange={
              (e) => {
                setStatusText(e.target)
              }
            }
      >
        <fieldset className='AskQuestion__container'>
          <legend>Задать вопрос</legend>
          <label htmlFor='AskQuestion-name' className='AskQuestion__label'>
            <p className='AskQuestion__labelTitle'>ФИО</p>
            <input type="text"
                   id='AskQuestion-name'
                   name='name'
                   className='AskQuestion__input'
                   placeholder='Представьтесь'
                   required
                   minLength="2"
                   maxLength="100"
            />
          </label>
          <label htmlFor='AskQuestion-contact' className='AskQuestion__label'>
            <p className='AskQuestion__labelTitle'>Ваши контактные данные</p>
            <input type="text"
                   id='AskQuestion-contact'
                   name='contact'
                   className='AskQuestion__input'
                   placeholder='Телефон и/или email'
                   required
                   minLength="2"
                   maxLength="100"
            />
          </label>
          <label htmlFor='AskQuestion-text' className='AskQuestion__label'>
            <p className='AskQuestion__labelTitle'>Ваш вопрос</p>
            <textarea
              id='AskQuestion-text'
              name='text'
              className='AskQuestion__input AskQuestion__textarea'
              placeholder='Текст сообщения'
              required
              minLength="5"

            />
          </label>
          <div className='AskQuestion__checkboxContainer'>
            <input type="checkbox" className='AskQuestion__checkbox' id='AskQuestion__checkbox'/>
            <label htmlFor="AskQuestion__checkbox">Я даю согласие на обработку персональных данных</label>
          </div>
          <button className='AskQuestion__buttonBuy'>Отправить</button>
        </fieldset>
      </form>
      <p className='AskQuestion__faq'>Вы также можете посмотреть раздел: <Link to='/faq/'>
        Часто Задаваемые Вопросы</Link></p>
    </div>
  )
}

export default AskQuestion