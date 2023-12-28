'use client'
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { NextPage } from 'next'
import { readOne } from '@/services/dynamoDb/interviews'
import { readOneForm } from '@/services/dynamoDb/forms'
import { QuestionSchema } from '@/models/schemas/QuestionSchema'
import { InterviewSchema } from '@/models/schemas/InterviewSchema'
import { FormSchema } from '@/models/schemas/FormSchema'
import QuestionsMenu from '@/components/QuestionsMenu'

import QuestionInfoHead from '@/components/QuestionInfoHead'
import G_Kids from '@/components/forms/G_Kids'
import G_Education from '@/components/forms/G_Education'
import G_WorkSituation from '@/components/forms/G_WorkSituation'
import Stress from '@/components/forms/Stress'
import Anxiety from '@/components/forms/Anxiety'
import PTSD from '@/components/forms/PTSD'
import Depression from '@/components/forms/Depression'
import KNFG_Food_1 from '@/components/forms/KNFG_Food_1'
import Yes_No from '@/components/forms/Yes_No'
import KNFG_Games_1 from '@/components/forms/KNFG_Games_1'
import AMD_Alcohol_1 from '@/components/forms/AMD_Alcohol_1'
import AMD_Alcohol_3 from '@/components/forms/AMD_Alcohol_3'
import AMD_Alcohol_2 from '@/components/forms/AMD_Alcohol_2'
import AMD_Alcohol_5 from '@/components/forms/AMD_Alcohol_5'
import AMD_Alcohol_6 from '@/components/forms/AMD_Alcohol_6'
import AMD_Debut from '@/components/forms/AMD_Debut'
import AMD_Substances from '@/components/forms/AMD_Substances'
import AMD_LastUsed from '@/components/forms/AMD_LastUsed'
import AMD_HowOften from '@/components/forms/AMD_HowOften'
import AMD_IntoxicatingEffect from '@/components/forms/AMD_IntoxicatingEffect'
import AMD_Overdosed from '@/components/forms/AMD_Overdosed'
import AMD_StrongerDoses from '@/components/forms/AMD_StrongerDoses'
import AMD_Debut_v2 from '@/components/forms/AMD_Debut_v2'
import AMD_Treatment from '@/components/forms/AMD_Treatment'
import AMD_CurrentStay from '@/components/forms/AMD_CurrentStay'
import TextArea from '@/components/inputs/TextArea'
import Yes_No_Text from '@/components/forms/Yes_No_Text'

const Question: NextPage = () => {
	const params = useParams()
	const { id, questionId } = params
	const [interview, setInterview] = useState<InterviewSchema | null>(null)
	const [form, setForm] = useState<FormSchema | null>(null)
	const [question, setQuestion] = useState<QuestionSchema | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await readOne(id as string)
				setInterview(data as InterviewSchema)
			} catch (error) {
				console.log(error)
			}
		}

		fetchData()
	}, [id])

	useEffect(() => {
		const fetchForm = async () => {
			try {
				if (interview) {
					const res = await readOneForm(interview.formType as string)
					setForm(res.data as FormSchema)

					const formQuestion = res.data?.questions.find(
						(q: { id: number }) =>
							q.id === parseInt(questionId as string),
					)
					setQuestion(formQuestion as QuestionSchema)
				}
			} catch (error) {
				console.log(error)
			}
		}

		fetchForm()
	}, [interview, questionId])

	type FormComponent = React.FC<any>

	const formComponentsAddis: Record<string, FormComponent> = {
		'1': G_Education,
		'2': G_Kids,
		'3': Yes_No,
		'4': G_Education,
		'5': G_WorkSituation,
		'6': Stress,
		'7': Anxiety,
		'8': PTSD,
		'9': Depression,
		'10': G_Education,
		'11': Yes_No_Text,
		'12': G_Education,
		'13': Yes_No,
		'14': KNFG_Food_1,
		'15': Yes_No,
		'16': KNFG_Games_1,
		'17': AMD_Alcohol_1,
		'18': AMD_Alcohol_2,
		'19': AMD_Alcohol_3,
		'20': G_WorkSituation,
		'21': AMD_Alcohol_5,
		'22': AMD_Alcohol_6,
		'23': G_Education,
		'24': AMD_Debut,
		'25': AMD_Substances,
		'26': AMD_HowOften,
		'27': AMD_LastUsed,
		'28': AMD_IntoxicatingEffect,
		'29': AMD_Debut,
		'30': AMD_Debut,
		'31': AMD_Overdosed,
		'32': AMD_Overdosed,
		'33': AMD_Debut,
		'34': AMD_Debut,
		'35': AMD_Debut,
		'36': AMD_Debut,
		'37': AMD_StrongerDoses,
		'38': AMD_Debut,
		'39': Yes_No,
		'40': AMD_Debut,
		'41': AMD_Debut,
		'42': AMD_Debut,
		'43': AMD_Debut,
		'44': AMD_Debut,
		'45': AMD_Debut,
		'46': AMD_Debut,
		'47': AMD_Debut,
		'48': AMD_Debut,
		'49': AMD_Debut,
		'50': AMD_Debut,
		'51': AMD_Debut,
		'52': AMD_Debut,
		'53': AMD_Debut,
		'54': AMD_Debut,
		'55': AMD_Debut,
		'56': AMD_Debut,
		'57': AMD_Debut_v2,
		'58': AMD_Debut,
		'59': AMD_Debut_v2,
		'60': AMD_Debut,
		'61': AMD_Debut,
		'62': AMD_Debut_v2,
		'63': AMD_Debut_v2,
		'64': AMD_Debut_v2,
		'65': AMD_Debut_v2,
		'66': AMD_Debut_v2,
		'67': AMD_Debut_v2,
		'68': AMD_Debut_v2,
		'69': AMD_Debut,
		'70': AMD_Debut,
		'71': AMD_Debut,
		'72': AMD_Debut,
		'73': AMD_Debut,
		'74': AMD_Debut,
		'75': AMD_Debut,
		'76': AMD_Debut,
		'77': AMD_Debut,
		'78': Yes_No,
		'79': AMD_Treatment,
		'80': AMD_CurrentStay,
		'81': Yes_No_Text,
		'82': Yes_No,
	}

	const formComponentsAddisSubstance: Record<string, FormComponent> = {
		'1': AMD_Alcohol_1,
		'2': AMD_Alcohol_2,
		'3': AMD_Alcohol_3,
		'4': G_WorkSituation,
		'5': AMD_Alcohol_5,
		'6': AMD_Alcohol_6,
		'7': G_Education,
		'8': AMD_Debut,
		'9': AMD_Substances,
		'10': AMD_HowOften,
		'11': AMD_LastUsed,
		'12': AMD_IntoxicatingEffect,
		'13': AMD_IntoxicatingEffect,
		'14': AMD_Debut,
		'15': AMD_Overdosed,
		'16': AMD_Overdosed,
		'17': AMD_Debut,
		'18': AMD_Debut,
		'19': AMD_Debut,
		'20': AMD_Debut,
		'21': AMD_StrongerDoses,
		'22': AMD_Debut,
		'23': Yes_No,
		'24': AMD_Debut,
		'25': AMD_Debut,
		'26': AMD_Debut,
		'27': AMD_Debut,
		'28': AMD_Debut,
		'29': AMD_Debut,
		'30': AMD_Debut,
		'31': AMD_Debut,
		'32': AMD_Debut,
		'33': AMD_Debut,
		'34': AMD_Debut,
		'35': AMD_Debut,
		'36': AMD_Debut,
		'37': AMD_Debut,
		'38': AMD_Debut,
		'39': AMD_Debut,
		'40': AMD_Debut_v2,
		'41': AMD_Debut_v2,
		'42': AMD_Debut,
		'43': AMD_Debut_v2,
		'44': AMD_Debut,
		'45': AMD_Debut,
		'46': AMD_Debut_v2,
		'47': AMD_Debut_v2,
		'48': AMD_Debut_v2,
		'49': AMD_Debut_v2,
		'50': AMD_Debut_v2,
		'51': AMD_Debut_v2,
		'52': AMD_Debut_v2,
		'53': AMD_Debut,
		'54': AMD_Debut,
		'55': AMD_Debut,
		'56': AMD_Debut,
		'57': AMD_Debut,
		'58': AMD_Debut,
		'59': AMD_Debut,
		'60': AMD_Debut,
		'61': AMD_Debut,
		'62': Yes_No,
		'63': AMD_Treatment,
		'64': AMD_CurrentStay,
		'65': Yes_No_Text,
		'66': Yes_No,
	}

	const formComponentsAddisYoung: Record<string, FormComponent> = {
		'1': G_WorkSituation,
		'2': TextArea,
		'3': Yes_No_Text,
		'4': G_Education,
		'5': TextArea,
		'6': G_WorkSituation,
		'7': TextArea,
		'8': Stress,
		'9': Stress,
		'10': Anxiety,
		'11': PTSD,
		'12': Depression,
		'13': Yes_No,
		'14': G_Kids,
		'15': G_Education,
		'16': Yes_No,
		'17': PTSD,
		'18': Yes_No,
		'19': KNFG_Games_1,
		'20': AMD_Alcohol_1,
		'21': AMD_Alcohol_2,
		'22': TextArea,
		'23': AMD_Alcohol_6,
		'24': TextArea,
		'25': G_WorkSituation,
		'26': AMD_Alcohol_5,
		'27': AMD_Alcohol_5,
		'28': G_WorkSituation,
		'29': AMD_Debut,
		'30': AMD_Substances,
		'31': AMD_HowOften,
		'32': AMD_LastUsed,
		'33': Yes_No,
		'34': Yes_No,
		'35': AMD_Debut,
		'36': AMD_Overdosed,
		'37': AMD_Overdosed,
		'38': AMD_Debut,
		'39': Yes_No,
		'40': AMD_Debut,
		'41': AMD_Debut,
		'42': AMD_StrongerDoses,
		'43': AMD_Debut,
		'44': Yes_No,
		'45': AMD_Debut,
		'46': AMD_Debut,
		'47': AMD_Debut,
		'48': AMD_Debut,
		'49': AMD_Debut,
		'50': AMD_Debut,
		'51': AMD_Debut,
		'52': AMD_Debut,
		'53': AMD_Debut,
		'54': AMD_Debut,
		'55': AMD_Debut,
		'56': AMD_Debut,
		'57': AMD_Debut_v2,
		'58': AMD_Debut,
		'59': AMD_Debut_v2,
		'60': AMD_Debut,
		'61': AMD_Debut,
		'62': AMD_Debut_v2,
		'63': AMD_Debut_v2,
		'64': AMD_Debut_v2,
		'65': AMD_Debut_v2,
		'66': AMD_Debut_v2,
		'67': AMD_Debut_v2,
		'68': AMD_Debut_v2,
		'69': AMD_Debut,
		'70': AMD_Debut,
		'71': AMD_Debut,
		'72': AMD_Debut,
		'73': AMD_Debut,
		'74': AMD_Debut,
		'75': AMD_Debut,
		'76': AMD_Debut,
		'77': AMD_Debut,
		'78': Yes_No,
		'79': AMD_Treatment,
		'80': AMD_CurrentStay,
		'81': AMD_Debut,
		'82': AMD_Debut,
		'83': Yes_No,
		'84': AMD_Treatment,
		'85': AMD_CurrentStay,
		'86': Yes_No_Text,
		'87': Yes_No,
	}
	let formComponents: Record<string, React.FC<any>>
	if (interview?.formType === 'addis') {
		formComponents = formComponentsAddis
	} else if (interview?.formType === 'addis_substance') {
		formComponents = formComponentsAddisSubstance
	} else if (interview?.formType === 'addis_young') {
		formComponents = formComponentsAddisYoung
	} else {
		formComponents = {}
	}

	const SelectedFormComponent =
		formComponents[questionId as keyof typeof formComponents]

	if (!form?.questions) {
		return (
			<div className='flex justify-center mt-20'>
				<i className='bi bi-slash-circle-fill text-xl animate-spin'></i>
			</div>
		)
	}

	return (
		<>
			<div className='container'>
				<div className='shadow-md rounded p-4 my-4'>
					<QuestionsMenu questions={form?.questions as QuestionSchema[]} />
					{question !== null ? (
						<>
							<QuestionInfoHead question={question as QuestionSchema} />
							{SelectedFormComponent ? (
								<SelectedFormComponent question={question} />
							) : (
								<div className='text-center'>
									404 - Inget formulär med id {questionId} hittades.
								</div>
							)}
						</>
					) : (
						<>
							<div className='text-center'>
								404 - Ingen fråga med id {questionId} hittades.
							</div>
						</>
					)}
				</div>
			</div>
		</>
	)
}

export default Question
