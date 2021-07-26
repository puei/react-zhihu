import React, { useContext, useEffect, useState } from 'react'

const ThemeContext = React.createContext()

function ThemeProvider({ children, themes, defaultThemeKey }) {
	if (themes === undefined) {
		throw new Error('`ThemeProvider` must have a `themes` object.')
	}

	const firstTheme = Object.values(themes)[0]
	const defaultTheme = themes[defaultThemeKey] ?? firstTheme
	const [theme, setTheme] = useState(defaultTheme)

	const value = {
		theme,
		themes,
		setTheme,
	}

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

/**
 *
 * @returns {{
 *  theme: typeof THEME;
 *  setTheme: (themeObject: object)=>void
 *  switchTheme: (themeKey: string)=>void
 * }}
 */
function useTheme() {
	const context = useContext(ThemeContext)
	if (context === undefined)
		throw new Error('useTheme must be used within `ThemeProvider`')

	const { theme, themes, setTheme } = context

	function switchTheme(themeKey) {
		setTheme(themes[themeKey])
	}

	return {
		theme,
		setTheme,
		switchTheme,
	}
}

function useDarkMode() {
	const context = useContext(ThemeContext)
	if (context === undefined)
		throw new Error('useDarkMode must be used within `ThemeProvider`')

	const [themeKey, setThemeKey] = useState('theme')
	const { switchTheme } = useTheme()

	useEffect(() => {
		switchTheme(themeKey)
	}, [switchTheme, themeKey])

	function toggle() {
		const newKey = themeKey === 'theme' ? 'darkTheme' : 'theme'
		setThemeKey(newKey)
	}

	return {
		toggle,
		themeKey,
		setThemeKey,
	}
}

export { ThemeProvider, useTheme, useDarkMode }