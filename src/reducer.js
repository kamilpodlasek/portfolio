import action_types from './action-types'
import api from './api'

const initialState = {
  content: api.getContent()
};

let reducer = function (state = initialState, action) {
  switch (action.type) {
    case action_types.SWITCH_LANGUAGE:
      return {
        content: api.getContent(action.language)
      };
    default:
      return state;
  }
};

module.exports = reducer;