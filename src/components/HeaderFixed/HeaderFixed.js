import React, {useEffect, useState} from "react"
import './HeaderFixed.scss'
import {NavLink, withRouter} from "react-router-dom";
import iconCart from '../../image/hashtag-solid.svg'
import ButtonTopScroll from "../UI/ButtonTopScroll";
import {connect} from "react-redux";
import PopupLogin from "../PopupLogin";

const HeaderFixed = (props) => {
  const count = 0

  const [lastScrollY, setLastScrollY] = useState(0)
  const [popup, setPopup] = useState(false)
  const isLogin = () => {
    return localStorage.getItem('isLogin') === 'true'
  }

  useEffect(() => {
    const handleScroll = () => {
      setLastScrollY(window.scrollY)
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  return (
    <div className={'HeaderFixed ' + (lastScrollY > 40 ? 'HeaderFixed--active' : '')}>
      <div className='wrapper HeaderFixed__wrapper'>
        <NavLink to="/" className='HeaderFixed__logo'/>


        <div className='HeaderFixed__rightblock'>
          <NavLink to="/cart/" className='HeaderFixed__cart'>
            <img src={iconCart} alt="корзина"/>
            {count !== 0 ? <span className='HeaderFixed__cartCount'>{count}</span> :
              <span className='HeaderFixed__cartText'>КотоБаллы</span>}
          </NavLink>
          {props.history.location.pathname === '/profile/'
            ? <button className='HeaderFixed__logIn' onClick={() => {
              localStorage.setItem('isLogin', 'false')
              props.history.push('/')
              window.scroll(0, 0)
            }}>Выйти
            </button>
            : <button className='HeaderFixed__logIn' onClick={() => {
              if (isLogin()) {
                props.history.push('/profile/')
                window.scroll(0, 0)
              } else setPopup(true)
            }}>{isLogin() ? 'Личный кабинет' : 'Войти'}
            </button>}
        </div>
      </div>
      {lastScrollY > 400 && <ButtonTopScroll/>}
      <PopupLogin active={popup}
                  onClick={() => setPopup(false)}
      />
    </div>
  )
}

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderFixed))

