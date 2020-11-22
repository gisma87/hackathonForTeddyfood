import React from 'react';
import './IndexMobile.scss'
import logo from '../../image/hashtag-white.svg'
import Card from "../../components/Card/Card";
import {onSelectRetail} from "../../actions";
import {connect} from "react-redux";

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


class indexMobile extends React.Component {

  state = {
    checked: data[0],
  }

  onSelectHandler = (value) => {
    this.setState({checked: value})
  }

  render() {
    return (
      <div className='indexMobile'>
        <div className='indexMobile__logoPanel'>
          <img src={logo} className='indexMobile__logo' alt='logo'/>
          <p>Какая-то надпись</p>
        </div>

        <Card data={data}
              checked={this.props.info}
              onChange={(e) => this.props.onSelectRetail('info', e.target.value)}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis commodi consequuntur cumque dolorum
          eaque eius illo ipsum iste, iure nihil pariatur praesentium repudiandae, sequi sint sunt temporibus vel vero!
        </Card>
        <Card data={data}
              checked={this.state.checked}
              onChange={(e) => this.onSelectHandler(e.target.value)}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis deleniti dolore hic ipsa itaque,
          laboriosam magni maiores numquam officiis porro, quod recusandae reiciendis tempore unde veniam vitae.
          Reprehenderit, voluptates.
        </Card>
        <Card data={data}
              checked={this.state.checked}
              onChange={(e) => this.onSelectHandler(e.target.value)}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis deleniti dolore hic ipsa itaque,
          laboriosam magni maiores numquam officiis porro, quod recusandae reiciendis tempore unde veniam vitae.
          Reprehenderit, voluptates.
        </Card>
        <Card data={data}
              checked={this.state.checked}
              onChange={(e) => this.onSelectHandler(e.target.value)}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis deleniti dolore hic ipsa itaque,
          laboriosam magni maiores numquam officiis porro, quod recusandae reiciendis tempore unde veniam vitae.
          Reprehenderit, voluptates.
        </Card>

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

export default connect(mapStateToProps, mapDispatchToProps)(indexMobile)