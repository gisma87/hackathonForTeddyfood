import React, {useState} from "react"
import './HeaderTop.scss'
import {Link, withRouter} from "react-router-dom";
import PopupCities from "../PopupCities";
import {connect} from "react-redux";

const HeaderTop = (props) => {
  const {history} = props;
  const [popup, setPopup] = useState(false)

  return (
    <div className='HeaderTop'>
      <div className='wrapper'>
        <div className='HeaderTop__headItem' onClick={() => setPopup(true)}>
          <span>Popup</span>
        </div>
        <ul className='HeaderTop__headItems'>
          <li>
            <Link className='HeaderTop__link' to="/address/">О проекте</Link>
          </li>
          <li>
            <Link className='HeaderTop__link' to='/'
                  onClick={(event) => {
                    event.preventDefault()
                    history.push('/')
                    window.scrollTo({
                      top: 780,
                      left: 0,
                      behavior: 'smooth'
                    });
                  }}
            >Как помогать</Link>
          </li>
          <li>
            <Link className='HeaderTop__link' to="/promotions/">Питомцы</Link>
          </li>
        </ul>
        <Link to='/ask-question/' className='HeaderTop__headItem HeaderTop__link'>Задать вопрос</Link>
      </div>
      <PopupCities active={popup}
                   cities={[]}
                   onClick={() => setPopup(false)}
                   onSelectCity={(item) => {
                     setPopup(false);
                   }}
      />
    </div>
  )
}

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderTop))