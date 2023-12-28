import React from 'react'
import RadioGroup from '../inputs/Radio'
import { QuestionSchema } from '@/models/schemas/QuestionSchema'

interface Props {
	question: QuestionSchema
}

const G_Education: React.FC<Props> = ({ question }) => {
	return (
		<>
			<RadioGroup options={question.options} />
		</>
	)
}

export default G_Education
