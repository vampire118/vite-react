import counterReducer, {CounterState} from "./counter/slice";

export type StateType = {
    counter: CounterState;
};

const rootReducers = {
    counter: counterReducer,
};

export default rootReducers;