import React from 'react'

import { connect } from 'react-redux'

import { checkFirstInputValue, checkSecondInputValue } from './state/sum'

const style = {
    input: {
        margin: 30
    }
}

class Add extends React.Component {

    render() {
        return (
            <div>
                <h1>Result: {this.props._first + this.props._second}
                </h1>
                <div
                    style={style.input}
                >
                    <h2>First input</h2>
                    <input
                        value={this.props._first}
                        onChange={this.props._checkFirstInputValue}
                    />
                </div>
                <div
                    style={style.input}
                >
                    <h2>Second input</h2>
                    <input
                        value={this.props._second}
                        onChange={this.props._checkSecondInputValue}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _first: state.sum.first,
    _second: state.sum.second
})

const dispatchToProps = dispatch => ({
    _checkFirstInputValue: (e) => dispatch(checkFirstInputValue(e.target.value)),
    _checkSecondInputValue: (e) => dispatch(checkSecondInputValue(e.target.value))
})

export default connect(
    mapStateToProps,
    dispatchToProps
)(Add)