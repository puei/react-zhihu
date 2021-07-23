import {Router} from '@reach/router'
import DemoPage from './containers/DemoPage'
import HomePage from './containers/HomePage'


function Routes() {
    return <Router>
        <HomePage path='/' title='首页 - 知乎' />
        <HomePage path='/follow' />
        <DemoPage path='/demo' />
    </Router>
}
export default Routes