import React from 'react'

import { database } from './firebaseConfig'

class SyncUsers extends React.Component {

    state = {
        users: []
    }

    componentDidMount() {
        database.ref('/jfddl6/randomusers').once(
            'value',
            snapshot => {
                const arrayOfUsers = snapshot.val().results
                this.setState({ users: arrayOfUsers })
            }
        )
    }

    render() {
        return (
            <div>
                {this.state.users &&
                    this.state.users.map ?
                    this.state.users.map(user => (
                        <div
                            key={user.login.uuid}
                        >Email: {user.email}</div>
                    ))
                    :
                    'Error!'
                }
            </div>
        )
    }
}

export default SyncUsers