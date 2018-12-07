import React from 'react'

import { connect } from 'react-redux'

const style = {
    input: {
        margin: 30
    }
}

class Add extends React.Component {

    state = {
        first: this.props.first,
        second: this.props.second
    }

    checkFirstInputValue = e => this.setState({
        first: parseInt(e.target.value) || 0
    })

    checkSecondInputValue = e => this.setState({
        second: parseInt(e.target.value) || 0
    })


    render() {
        return (
            <div>
                <h1>Result: {this.state.first + this.state.second}
                </h1>
                <div
                    style={style.input}
                >
                    <h2>First input</h2>
                    <input
                        value={this.props._first}
                        onChange={this.checkFirstInputValue}
                    />
                </div>
                <div
                    style={style.input}
                >
                    <h2>Second input</h2>
                    <input
                        value={this.props._second}
                        onChange={this.checkSecondInputValue}
                    />
                </div>
            </div>
        )
    }
}

// Add.defaultProps = {
//     first: 2,
//     second: 2
// }

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