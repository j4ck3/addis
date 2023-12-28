import React from 'react'
import Text from '../inputs/Text'
import RadioGroup from '../inputs/Radio'
import { QuestionSchema } from '@/models/schemas/QuestionSchema'

interface Props {
	question: QuestionSchema
}

const G_WorkSituation: React.FC<Props> = ({ question }) => {
	return (
		<>
			<RadioGroup options={question.options} />
			<Text label={'Yrke/Sysselsättning?'} />
		</> //in med label och fixa radiogroup
	)
}

export default G_WorkSituation
