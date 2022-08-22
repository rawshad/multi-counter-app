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

//helper function
function nextCounerId(counters) {
    const maxId = counters.reduce(
        (maxId, counter) => Math.max(counter.id, maxId),
        -1
    );
    return maxId + 1;
}

//reducer function
function counterReducer (state = initialState, action) {
    if (action.type === ADD_COUNTER) {
        return [
            ...state,
            {
                id: nextCounerId(state),
                value: 0,
                incrementBy: Math.floor(Math.random() * 10) + 1,
                decrementBy: Math.floor(Math.random() * 10) + 1,
            }
        ]
    } if (action.type === RESET_COUNTERS) {
        return state.map((counter) => ({
            ...counter,
            value: 0,
        }));
    } 
    
    if (action.type === INCREMENT) {
        const {counterId, value} = action.payload;
        return state.map((counter) => {
            if (counter.id === counterId) {
                return {
                    ...counter,
                    value: counter.value + value,
                };
            } 
            return {
                ...counter,
            };
        });
    }
    if (action.type === DECREMENT) {
        const {counterId, value} = action.payload;
        return state.map((counter) => {
            if (counter.id === counterId) {
                return {
                    ...counter,
                    value: counter.value - value,
                };
            } 
            return {
                ...counter,
            };
        });
    }
}