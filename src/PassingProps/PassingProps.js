import React from 'react'

import PassingPropsPrim from './PassingPropsPrim'
class PassingProps extends React.Component {

    render() {
        return (
            <div>
                <PassingPropsPrim
                    passingValue={this.props.passingValue}
                    passingFun={() => this.props.passingFun()}
                />
            </div>
        )
    }
}

PassingProps.defaultProps = {
    passingValue: 0,
    passingFun: () => alert('bu!')
}

export default PassingProps