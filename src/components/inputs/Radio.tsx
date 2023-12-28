import React, { ChangeEvent, useState } from 'react'

interface RadioProps {
	label: string
	value: string
	selectedOption: string | null
	onOptionChange: (value: string) => void
}

const Radio: React.FC<RadioProps> = ({
	label,
	value,
	selectedOption,
	onOptionChange,
}) => {
	const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
		onOptionChange(event.target.value)
	}

	return (
		<div className='grid grid-cols-2 p-3'>
			<label
				className='cursor-pointer capitalize hover:text-slate-400'
				htmlFor={value}
			>
				{label}
			</label>
			<input
				id={value}
				type='radio'
				value={value}
				checked={selectedOption === value}
				onChange={handleOptionChange}
			/>
		</div>
	)
}

interface RadioGroupProps {
	options: { id: string; label: string }[]
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options }) => {
	const [selectedOption, setSelectedOption] = useState<string | null>(null)

	const handleOptionChange = (value: string) => {
		setSelectedOption(value)
	}

	return (
		<div>
			{options.map((option) => (
				<Radio
					key={option.id}
					label={option.label}
					value={option.label}
					selectedOption={selectedOption}
					onOptionChange={handleOptionChange}
				/>
			))}
		</div>
	)
}
export default RadioGroup
