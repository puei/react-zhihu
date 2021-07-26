import {Router} from '@reach/router'
import DemoPage from './containers/DemoPage'
import HomePage from './containers/HomePage'
import { CountProvider } from './containers/DemoPage/contexts/CountCountext'


function Routes() {
    return (
        <Router>
            <HomePage path='/' title='首页 - 知乎' />
            <HomePage path='/follow' />
            <CountProvider path='/'>
                    <DemoPage path='/demo' />
            </CountProvider>
        </Router>
    )
    
}
export default Routes