import { memo } from 'react'

const Hide = ({ children, suspense, show = false }: { show?: boolean; children: any; suspense?: any }) => {
	return show ? children : suspense ? suspense : null
}
export default memo(Hide)