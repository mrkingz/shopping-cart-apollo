import { Hide } from '.'
import LoadingScreen from './LoadingScreen'
import { useEffect, useState, FC } from 'react'
import { StackProps} from '@chakra-ui/react'

const ClientOnly: FC<StackProps> = ({ children }) => {
	const [hasMounted, setHasMounted] = useState(false)

	useEffect(() => {
		setHasMounted(true)
	}, [])

	return (
		<Hide show={hasMounted} suspense={<LoadingScreen />}>
			{children}
		</Hide>
	)
}

export default ClientOnly