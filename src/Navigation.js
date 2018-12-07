import React from 'react'

import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import { List, ListItem } from 'material-ui/List'

const style = {
    links: {
        textDecoration: 'none'
    }
}

class Navigation extends React.Component {

    render() {
        return (
            <Drawer>
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
        )
    }
}

export default Navigation