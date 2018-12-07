import React from 'react'

import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'
import { List, ListItem } from 'material-ui/List'

const style = {
    links: {
        textDecoration: 'none'
    },
    button: {
        position: 'fixed',
        right: 0
    }
}

class Navigation extends React.Component {

    state = {
        open: false
    }

    handleToggle = () => this.setState({ open: !this.state.open })

    render() {
        return (
            <div>
                <RaisedButton
                    label="Toggle drawer"
                    onClick={this.handleToggle}
                    style={style.button}
                    primary={true}
                />
                <Drawer
                    docked={false}
                    open={this.state.open}
                    onRequestChange={this.handleToggle}
                >
                    <List>
                        <Link to="/"
                            style={style.links}>
                            <ListItem>
                                Main
                            </ListItem>
                        </Link>
                        <Link
                            to="/counter"
                            style={style.links}>
                            <ListItem>
                                Counter
                            </ListItem>
                        </Link>
                        <Link to="/passing-props"
                            style={style.links}>
                            <ListItem>
                                Passing-Props
                        </ListItem>
                        </Link>
                        <Link to="/counter-with-start-value"
                            style={style.links}>
                            <ListItem>
                                Counter with start value
                        </ListItem>
                        </Link>
                        <Link to="/fetch-users"
                            style={style.links}>
                            <ListItem>
                                Fetch users
                            </ListItem>
                        </Link>
                        <Link to="/fetch-users-fb"
                            style={style.links}>
                            <ListItem>
                                Fetch users from firebase
                            </ListItem>
                        </Link>
                        
                    </List>
                </Drawer>
            </div>
        )
    }
}

export default Navigation