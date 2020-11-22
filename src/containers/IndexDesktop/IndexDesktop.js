import React from "react"
import './IndexDesktop.scss'
import HelpIntro from "../../components/HelpIntro/HelpIntro";
import Card from "../../components/Card/Card";
import {connect} from "react-redux";
import {onSelectRetail} from "../../actions";
import Board from "../../components/Board/Board";

class IndexDesktop extends React.Component {

  state = {
    formShow: false,
    formShowAlways: true
  }

  onSelectHandler = (value) => {
    this.setState({checked: value})
  }

  render() {
    return (
      <div className='mainPage'>
        <div className='mainPage__boardBlock mainPage__wrapper'>
          <Card
            onClick={() => this.setState({formShow: true})}
          >
            <p>Выберите Город / Приют / Вид животного / Возраст</p>
            <p>Чтобы увидеть сумму денег, которые собрали эти животные</p>
          </Card>

          {this.state.formShowAlways && <Board/>}

        </div>

        <HelpIntro id='helpinfo'/>
      </div>
    )
  }
}

const mapStateToProps = ({info}) => {
  return {info}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectRetail: (type, id) => dispatch(onSelectRetail(type, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexDesktop)