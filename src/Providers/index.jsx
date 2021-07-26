import DARK_THEME from '../constants/darkTheme'
import { THEME } from '../constants/theme'
import { ThemeProvider } from '../contexts/ThemeContext'

function Providers({ children }) {
	return (
		<ThemeProvider
			themes={{
				theme: THEME,
				darkTheme: DARK_THEME,
			}}
		>
			{children}
		</ThemeProvider>
	)
}

export default Providers