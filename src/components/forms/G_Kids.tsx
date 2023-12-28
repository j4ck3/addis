import React from 'react'
import Text from '../inputs/Text'
import Yes_No from './Yes_No'

const G_Kids: React.FC = () => {
	return (
		<>
			<Yes_No />
			<Text label={'Hur Många?'} />
			<Text label={'Ålder'} />
		</>
	
	)
}

export default G_Kids
