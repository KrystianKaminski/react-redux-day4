import React from 'react'


const style = {
    input: {
        margin: 30
    }
}

class Add extends React.Component {

    state = {
        first: this.props.first,
        second: this.props.second,
    }

    checkFirstInputValue = e => this.setState({
        first: e.target.value
    })

    checkSecondInputValue = e => this.setState({
        second: e.target.value
    })


    render() {
        return (
            <div>
                <h1>Result: {
                    parseInt(this.state.first) + parseInt(this.state.second)
                }
                </h1>
                <div
                    style={style.input}
                >
                    <h2>First input</h2>
                    <input
                        value={this.state.first}
                        onChange={this.checkFirstInputValue}
                    />
                </div>
                <div
                    style={style.input}
                >
                    <h2>Second input</h2>
                    <input
                        value={this.state.second}
                        onChange={this.checkSecondInputValue}
                    />
                </div>
            </div>
        )
    }
}

Add.defaultProps = {
    first: 2,
    second: 2
}

export default Add