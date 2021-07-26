import { rgba } from 'polished'

const palette = {
	primary: 'rgb(0, 102, 255)',
	red: 'rgb(241, 64, 60)',
	textgray: '#8590a6',
	lightgray: 'rgb(246, 246, 246)',
	get black() {
		const base = '#121212'
		return {
			base,
			90: rgba(base, 0.9),
			80: rgba(base, 0.8),
			70: rgba(base, 0.7),
			60: rgba(base, 0.6),
			50: rgba(base, 0.5),
			40: rgba(base, 0.4),
			30: rgba(base, 0.3),
			20: rgba(base, 0.2),
			10: rgba(base, 0.1),
			6: rgba(base, 0.06),
		}
	},
	get white() {
		const base = '#fff'
		return {
			base,
			90: rgba(base, 0.9),
			80: rgba(base, 0.8),
			70: rgba(base, 0.7),
			60: rgba(base, 0.6),
			50: rgba(base, 0.5),
			40: rgba(base, 0.4),
			30: rgba(base, 0.3),
			20: rgba(base, 0.2),
			10: rgba(base, 0.1),
		}
	},
}

const colors = {
	primary: palette.primary,
	secondary: palette.textgray,
	danger: palette.red,
	text: palette.white.base,
	background: palette.black[90],
	block: palette.black[80],
	white: palette.black,
	black: palette.white,
}

const fontSize = {
	caption: '12px',
	body: '14px',
	headline: '16px',
	title: '18px',
}

const boxShadow = {
	card: `0 2px 4px ${colors.black[10]};`,
}

const border = {
	divider: `1px solid ${colors.black[6]}`,
}

const DARK_THEME = {
	colors,
	fontSize,
	boxShadow,
	border,
}
export default DARK_THEME
