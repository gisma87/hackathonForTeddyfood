import React from "react"
import './IndexDesktop.scss'
import BlockWrapper from "../../components/BlockWrapper";
import HelpIntro from "../../components/HelpIntro/HelpIntro";

class IndexDesktop extends React.Component {
  render() {
    return (
      <div className='mainPage'>
        <div className='mainPage__boardBlock mainPage__wrapper'>
          <BlockWrapper title='название'>
            что-то написано
            <p>причём очень много написано</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto deleniti dolor eligendi esse
              expedita, illum in itaque perspiciatis praesentium qui ratione recusandae suscipit temporibus vel! Earum
              explicabo quisquam sint.</p>
          </BlockWrapper>
          <BlockWrapper title='название'>
            что-то написано
            <p>причём очень много написано</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto deleniti dolor eligendi esse
              expedita, illum in itaque perspiciatis praesentium qui ratione recusandae suscipit temporibus vel! Earum
              explicabo quisquam sint.</p>
          </BlockWrapper>
          <BlockWrapper title='название'>
            что-то написано
            <p>причём очень много написано</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto deleniti dolor eligendi esse
            </p>
          </BlockWrapper>
          <BlockWrapper title='название'>
            что-то написано
            <p>причём очень много написано</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto deleniti dolor eligendi esse
            </p>
          </BlockWrapper>
        </div>

        <HelpIntro />
      </div>
    )
  }
}

export default IndexDesktop