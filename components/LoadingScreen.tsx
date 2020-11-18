import BounceLoader from 'react-spinners/BounceLoader'
import React from 'react'
import {Stack} from '@chakra-ui/react'

const LoadingScreen = () => (
	<div>
		<BounceLoader color="blue" />
		<style jsx>
			{`
				display: flex;
				align-items: center;
				justify-content: center;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				background: white;
				z-index: 100;
			`}
		</style>
	</div>
)

export const WithLoading = (props: { isLoading?: boolean; children?: any }) => {
	return props.isLoading ? <LoadingScreen /> : <>{props.children}</>
}

export default React.memo(LoadingScreen)
