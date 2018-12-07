import React from 'react'

class FetchUsers extends React.Component {

    state = {
        users: []
    }

    componentDidMount() {
        fetch(`https://randomuser.me/api/?results=10`)
            .then(res => res.json())
            .then(data => this.setState({ users: data.results }))
    }

    render() {
        return (
            <div>
                {this.state.users &&
                    this.state.users.map ?
                    this.state.users.map(user => (
                        <div
                            key={user.login.uuid}
                        >Email: {user.email}
                        </div>
                    ))
                    : 'Error'

                }
            </div>
        )
    }
}

export default FetchUsers