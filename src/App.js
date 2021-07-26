import React from 'react'
import GlobalCSS from './components/GlobalCSS'
import Providers from './Providers'
import Routes from './Routes'

function App() {
	return (
		<Providers>
			<Routes />
			<GlobalCSS />
		</Providers>
	)
}

export default App

