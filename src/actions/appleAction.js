const prefix = 'apple/'

 const actions = {
  pickApple: () => (dispatch, getState) => {
    if (getState().isPicking) {
      return
    }
    dispatch(actions.beginPickApple())
    const url = '/appleBasket/pickApple'
    fetch(url)
      .then(res => dispatch(actions.donePickApple(res.weight)))
      .catch(err => dispatch(actions.failPickApple(err)))
  },

  beginPickApple: () => ({
    type: 'apple/BEGIN_PICK_APPLE'
  }),

  donePickApple: appleWeight => ({
    type: 'apple/DONE_PICK_APPLE',
    payload: appleWeight
  }),

  failPickApple: errMsg => ({
    type: 'apple/FAIL_PICK_APPLE',
    payload: new Error(errMsg),
    error: true
  }),

  eatApple: appleId => ({
    type: 'apple/EAT_APPLE',
    payload: appleId
  })
}

export default actions