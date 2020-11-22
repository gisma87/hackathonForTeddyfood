import React from "react"
import './IndexDesktop.scss'
import HelpIntro from "../../components/HelpIntro/HelpIntro";
import Card from "../../components/Card/Card";
import {connect} from "react-redux";
import {onSelectRetail} from "../../actions";

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

class IndexDesktop extends React.Component {

  state = {
    checked: data[0],
  }

  onSelectHandler = (value) => {
    this.setState({checked: value})
  }

  render() {
    return (
      <div className='mainPage'>
        <div className='mainPage__boardBlock mainPage__wrapper'>
          <Card data={data}
                checked={this.props.info}
                onChange={(e) => this.props.onSelectRetail('info', e.target.value)}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci architecto atque delectus deserunt
            distinctio doloremque enim et excepturi expedita id iure maxime natus neque, qui quidem quo quos.
            Consectetur?
          </Card>
          <Card data={data}
                checked={this.state.checked}
                onChange={(e) => this.onSelectHandler(e.target.value)}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci architecto atque delectus deserunt
            distinctio doloremque enim et excepturi expedita id iure maxime natus neque, qui quidem quo quos.
            Consectetur?
          </Card>
          <Card data={data}
                checked={this.state.checked}
                onChange={(e) => this.onSelectHandler(e.target.value)}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci architecto atque delectus deserunt
            distinctio doloremque enim et excepturi expedita id iure maxime natus neque, qui quidem quo quos.
            Consectetur?
          </Card>
          <Card data={data}
                checked={this.state.checked}
                onChange={(e) => this.onSelectHandler(e.target.value)}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci architecto atque delectus deserunt
            distinctio doloremque enim et excepturi expedita id iure maxime natus neque, qui quidem quo quos.
            Consectetur?
          </Card>
          <Card data={data}
                checked={this.state.checked}
                onChange={(e) => this.onSelectHandler(e.target.value)}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci architecto atque delectus deserunt
            distinctio doloremque enim et excepturi expedita id iure maxime natus neque, qui quidem quo quos.
            Consectetur?
          </Card>

        </div>

        <HelpIntro id='helpinfo' />
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