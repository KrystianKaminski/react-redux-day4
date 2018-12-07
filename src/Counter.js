import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {

    state = {
        value: this.props.value
    }

    inc = () => this.setState({value: this.state.value + 1})
    dec = () => this.setState({value: this.state.value - 1})


    render() {
        return (
        <div>
            <h1>{this.state.value}</h1>
            <button
                onClick={() => this.inc()}
            >+</button>
            <button
                onClick={() => this.dec()}
            >-</button>
        </div>

        )

    }
}

Counter.defaultProps = {
    value: 3
}

Counter.propTypes = {
    value: PropTypes.number.isRequired
}


export default Counter