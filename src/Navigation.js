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

    handleToggle = () => this.setState({open: !this.state.open})

    render() {
        return (
            <div>
                <RaisedButton
                    label="Toggle drawer"
                    onClick={this.handleToggle}
                    style={style.button}
                />
                <Drawer
                    open={this.state.open}
                >
                    <List>
                        <ListItem>
                            <Link to="/"
                                style={style.links}>Main
                         </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                to="/counter"
                                style={style.links}>Counter
                        </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/passing-props"
                                style={style.links}>Passing-Props
                        </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/counter-with-start-value"
                                style={style.links}>Counter with start value
                        </Link>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        )
    }
}

export default Navigation