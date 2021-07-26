import {css} from '@emotion/react'
import React from 'react'
import Heading from "../../components/Heading";
import Text from '../../components/Text'
import { useDarkMode, useTheme } from '../../contexts/ThemeContext'
import Button from './components/Button'
import Count from './components/Count'
import Switch from "./components/Switch";
import { useCount } from './contexts/CountCountext'
import useSwitch from './hooks/useSwitch';

function DemoPage() {

    const { bind, open, toggle } = useSwitch()
	const { count } = useCount()

	const { theme } = useTheme()
	const { toggle: toggleTheme } = useDarkMode()

    return (
        <>
            <div className="DemoPage" css={css`
					color: ${theme.colors.primary};
			`}>
                <button onClick={toggleTheme}>toggle theme</button>
				
                <Text as='a'>Hello</Text>
				<Heading>Hello</Heading>
				<Heading as='h5'>Hello</Heading>
				<Button count={100} />
                
                <h3>{open ? 'open' : 'close'}</h3>

				<button onClick={toggle}>toggle</button>

				<div style={{ margin: 20 }}>
					<Switch {...bind()} />
				</div>

                <Count />
				<h3>{count}</h3>

            </div>
        </>
    )
    
}

export default DemoPage
