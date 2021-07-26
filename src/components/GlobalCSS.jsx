import { css, Global } from '@emotion/react'
import { normalize } from 'polished'
import { useTheme } from '../contexts/ThemeContext'

function GlobalCSS() {
	const { theme } = useTheme()

	return (
		<Global
			styles={css`
				${normalize()}
				body {
					background: ${theme.colors.background};
					color: ${theme.colors.text};
					transition: .2s ;
				}
				html {
					box-sizing: border-box;
				}
				*,*:before,*:after {
					box-sizing: inherit;
				}
                input{
                    background:none;  
                    outline:none;  
                    border:0px;
                }
				button {
					background: none;
					border: none;
					margin: 0;
					padding: 0;
					cursor: pointer;
				}
			`}
		/>
	)
}

export default GlobalCSS

