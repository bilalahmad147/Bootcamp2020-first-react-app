const CounterReaducer = (state, action) => {
    switch (action) {
        case 'INCREAMENT':
            return state + 1;
    }
}

export default CounterReaducer;