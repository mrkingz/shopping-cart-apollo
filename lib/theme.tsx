import { extendTheme } from '@chakra-ui/react'
import { ColorType } from '../@types'

const colors: ColorType = {
	'neutral-100': '#253858',
	'neutral-200': '#172B4D',
	'neutral-300': '#091E42',

	'grey-100': '#EDF2F7',
	'grey-200': '#CBD5E0',
	'grey-300': '#CBD5E0',
	'grey-400': '#A0AEC0',
	'grey-500': '#718096',
	'grey-600': '#4A5568',
	'grey-700': '#2D3748',
	'grey-800': '#718096',
	'grey-900': '#1A202C',
}

const getColor = (color: keyof ColorType) => {
	return colors[color]
}

const theme = extendTheme({ colors })

export { getColor, theme }



