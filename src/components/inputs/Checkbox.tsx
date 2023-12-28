import React from 'react'

interface Props {
	label: string
}

const Checkbox: React.FC<Props> = ({ label }) => {
	return (
		<>
			<div className='grid grid-cols-2 p-3'>
				<div>{label}</div>
				<div>
					<input type='checkbox' name='checkbox' />
				</div>
			</div>
		</>
	)
}

export default Checkbox
