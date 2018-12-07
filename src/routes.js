import Counter from './Counter'
import PassingProps from './PassingProps'
import FetchUsers from './FetchUsers'
import SyncUsers from './SyncUsers'


const routes = [
    {
        component: Counter,
        path: '/counter',
        label: 'Counter',
        key: 'randomKey'
    },
    {
        component: PassingProps,
        path: '/passing-props',
        label: 'Passing Props',
        key: 'randomKey'
    },
    {
        component: Counter,
        path: '/counter-with-start-value',
        label: 'Counter with start value',
        key: 'randomKey'
    },
    {
        component: FetchUsers,
        path: '/fetch-users',
        label: 'Fetch users',
        key: 'randomKey'
    },
    {
        component: SyncUsers,
        path: '/fetch-users-fb',
        label: 'Fetch users from firebase',
        key: 'randomKey'
    }

]

export default routes