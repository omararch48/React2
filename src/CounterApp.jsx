import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';




export const CounterApp = ({value}) => {
    const plusOne = () => {
        setCounter((c) => c + 1);
    }
    const minusOne = () => {
        setCounter((c) => c - 1);
    }
    const reset = () => {
        setCounter((c) => value);
    }
    const [counter, setCounter] = useState(value)
    
    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={minusOne}>
                -1
            </button>
            <button onClick={plusOne}>
                +1
            </button>
            <button onClick={reset}>
                Reset
            </button>
        </Fragment>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0,
}