import axios from "axios";

const setError = (error) => {
  return {
    type: 'FETCH_FAILURE',
    payload: error
  }
}

const loadingTrue = () => {
  return {
    type: 'LOADING'
  }
}

const onSelectRetail = (type, id) => {
  return {
    type: 'ON_SELECT_CARD',
    payload: {type, id}
  }
}

export {
  loadingTrue,
  onSelectRetail,
}