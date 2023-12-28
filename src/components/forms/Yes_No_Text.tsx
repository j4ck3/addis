import React from 'react'
import Yes_No from './Yes_No'
import Text from '../inputs/Text'

const Yes_No_Text: React.FC = () => {
	return (
		<>
			<Yes_No />
			<Text label={'Hur många?'} />
		</>
	)
}

export default Yes_No_Text
