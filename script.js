// initial state
const initialState = [
    {
        id: 0,
        value: 0,
        incrementBy: 1,
        decrementBy: 1,
    }
];

//actions identifier
const ADD_COUNTER = "addCounter";
const RESET_COUNTERS = "resetCounters";
const INCREMENT = "increment";
const DECREMENT = "decrement";

//action creators
const addCounter = () => {
    return {
        type: ADD_COUNTER,
    };
};

const resetCounter = () => {
    return {
        type: RESET_COUNTERS,
    }
};

const increment = (counterId, value) => {

};

const decrement = (counterId, value) => {

};