import React from "react";
import './Profile.scss'
import BlockWrapper from "../../components/BlockWrapper";
import SvgCheck from "../../components/UI/icons/SvgCheck";

const Profile = () => {
  return (
    <BlockWrapper classStyle='ProfileSetting'>
      <h4>Настройки профиля</h4>
      <form>
        <BlockWrapper classStyle='ProfileSetting__item'>
          <p className='ProfileSetting__itemTitle'>Телефон</p>
          <div className='ProfileSetting__itemContent'>
            <p className='ProfileSetting__info'>+7 965 324 XX XX</p>
            <div className='ProfileSetting__check'><SvgCheck style={{color: 'green'}}/></div>
          </div>
        </BlockWrapper>
        <BlockWrapper classStyle='ProfileSetting__item'>
          <p className='ProfileSetting__itemTitle'>E-mail</p>
          <div className='ProfileSetting__itemContent'>
            <p className='ProfileSetting__info'>natan78@mail.ru</p>
            <div className='ProfileSetting__check'><SvgCheck style={{color: 'green'}}/></div>
          </div>
        </BlockWrapper>
        <BlockWrapper classStyle='ProfileSetting__item'>
          <p className='ProfileSetting__itemTitle'>Имя</p>
          <div className='ProfileSetting__itemContent'>
            <p className='ProfileSetting__info'>Ярополк</p>
          </div>
        </BlockWrapper>
        <BlockWrapper classStyle='ProfileSetting__item'>
          <p className='ProfileSetting__itemTitle'>Дата рождения</p>
          <div className='ProfileSetting__itemContent'>
            <p className='ProfileSetting__info'>30.12.1978</p>
          </div>
        </BlockWrapper>
        <BlockWrapper classStyle='ProfileSetting__item'>
          <p className='ProfileSetting__itemTitle'>Пол</p>

          <div className='ProfileSetting__itemContainer'>
            <div>

              <input type="radio" id="genderChoice1"
                     name="gender" value="male"/>
              <label htmlFor="genderChoice1">Мужской</label>
            </div>

            <div>
              <input type="radio" id="genderChoice2"
                     name="gender" value="female"/>
              <label htmlFor="genderChoice2">Женский</label>
            </div>
          </div>


        </BlockWrapper>
        <p className='ProfileSetting__changePass'>Сменить пароль</p>
        <button type='submit' className='ProfileSetting__submit'>Сохранить изменения</button>
      </form>
    </BlockWrapper>
  )
}

export default Profile