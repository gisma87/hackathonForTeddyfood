const initialState = {
  loading: false,
  error: null,
  city: "1"
}

const reducer = (state = initialState, action) => {

  console.log(action.type, action.payload);
  switch (action.type) {

    case 'LOADING' :
      return {
        ...state,
        loading: true,
      };

    case 'FETCH_FAILURE' :
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case 'ON_SELECT_CARD':
      return {
        ...state,
        [action.payload.type]: action.payload.id
      }

    default:
      return state;
  }
}

export default reducer;