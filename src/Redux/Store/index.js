import {createStore} from 'redux';

import { initialState } from '../InitialState';
import reducer from '../Reducers';

const store = createStore(reducer, initialState);

export default store;