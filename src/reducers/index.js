import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import generatorReducer from './generator';

const rootReducer = combineReducers({
  generator: generatorReducer,
  routing: routerReducer
});

/*
{
  generate: {
    type: 'paragraphs',
    size: 1,
    text: ['...']
  },
  router: {
    ...
  }
}

store.getState().generate.type
store.getState().generate.size
...
*/

export default rootReducer;
