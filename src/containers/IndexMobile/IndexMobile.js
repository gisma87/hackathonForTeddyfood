import React from 'react';
import './IndexMobile.scss'
import logo from '../../image/hashtag-white.svg'
import BlockWrapper from "../../components/BlockWrapper";



const indexMobile = () => {
  return (
    <div className='indexMobile'>
      <div className='indexMobile__logoPanel'>
        <img src={logo} className='indexMobile__logo' alt='logo'/>
        <p>Какая-то надпись</p>
      </div>

      <BlockWrapper title='название' classStyle='indexMobile__textBlock'>
        что-то написано
        <p>причём очень много написано</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto deleniti dolor eligendi esse
          expedita, illum in itaque perspiciatis praesentium qui ratione recusandae suscipit temporibus vel! Earum
          explicabo quisquam sint.</p>
      </BlockWrapper>
      <BlockWrapper title='название' classStyle='indexMobile__textBlock'>
        что-то написано
        <p>причём очень много написано</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto deleniti dolor eligendi esse
          expedita, illum in itaque perspiciatis praesentium qui ratione recusandae suscipit temporibus vel! Earum
          explicabo quisquam sint.</p>
      </BlockWrapper>
      <BlockWrapper title='название' classStyle='indexMobile__textBlock'>
        что-то написано
        <p>причём очень много написано</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto deleniti dolor eligendi esse
          expedita, illum in itaque perspiciatis praesentium qui ratione recusandae suscipit temporibus vel! Earum
          explicabo quisquam sint.</p>
      </BlockWrapper>

    </div>
  )
}

export default indexMobile