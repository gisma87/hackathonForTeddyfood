import React, {useState} from "react"
import './PopupLogin.scss'
import PopupWrapper from "../UI/PopupWrapper/PopupWrapper";

const PopupLogin = props => {

  const [formValid, setFormValid] = useState(false)

  return (
    <PopupWrapper onClick={props.onClick} active={props.active} classStyle='PopupLogin'>
      <h3 className="PopupLogin__title">Войти или зарегистрироваться</h3>
      <form className="PopupLogin__form" name="new"
            onSubmit={(event) => event.preventDefault()}
            onChange={(event) => {
              const input = event.target;
              if (input.id === 'PopupLogin-contact') {
                setFormValid(input.checkValidity())
              }
            }}
      >
        <input
          type="text"
          name="PopupLogin-contact"
          className="PopupLogin__input PopupLogin__input_type_name"
          placeholder="Телефон или e-mail"
          required
          minLength="6"
          maxLength="30"
          id="PopupLogin-contact"
        />
        <span id="error-newPlace" className="popup__error-message"/>
        <input
          type="text"
          name="PopupLogin-pwd"
          className="PopupLogin__input PopupLogin__input_type_link-url"
          placeholder="Код или пароль"
          id="PopupLogin-pwd"
        />
        <span id="error-linkPlace" className="popup__error-message"/>

        <div className='PopupLogin__buttonContainer'>
          <button type='submit'
                  className={"PopupLogin__button " + (formValid ? "PopupLogin__button_active" : '')}
                  onClick={() => {
                    localStorage.setItem('isLogin', 'true')
                    props.onClick()
                  }}
          >
            Войти
          </button>
          <button className={"PopupLogin__button " + (formValid ? "PopupLogin__button_active" : '')}>
            Получить код
          </button>
        </div>
      </form>
    </PopupWrapper>
  )
}

export default PopupLogin