import React, { useState } from 'react'
import QuestionComment from './QuestionComment'
import { QuestionSchema } from '@/models/schemas/QuestionSchema'
import { useParams } from 'next/navigation'
import Link from 'next/link'

interface Props {
   question: QuestionSchema
}

const QuestionInfoHead: React.FC<Props> = ({ question }) => {
   const [isCollapsed, setCollapsed] = useState(true)
   const [showQuestionCommentForm, setShowQuestionCommentFrom] = useState(false)
   const handleOnClose = () => setShowQuestionCommentFrom(false)
   const handleToggleCollapse = () => {
      setCollapsed(!isCollapsed)
   }
   return (
      <>
         {/* <h1 className='text-base font-bold text-green-600'>
            {question?.categoryId}
         </h1> */}
         <div className='text-2xl flex justify-between'>
            <div className='inline-flex text-xl space-x-3 mb-3'>
               {question?.text}
               <button
                  className='ms-2'
                  type='button'
                  onClick={handleToggleCollapse}
               >
                  <i
                     className={`bi bi-info-circle-fill text-3xl ${
                        !isCollapsed ? 'text-green-400' : 'text-green-600'
                     }`}
                  ></i>
                  <div className='sr-only'>info</div>
               </button>
               <button
                  type='button'
                  className='text-xs'
                  onClick={() => setShowQuestionCommentFrom(true)}
               >
                  <i className='bi bi-chat-text-fill text-green-600 text-3xl'></i>
                  <div className='sr-only'>show description</div>
               </button>
            </div>
         </div>
         <p>{question?.info}</p>
         <div
            className={`mt-2 transition-all duration-500 ease-in-out grid grid-cols-2 ${
               isCollapsed ? 'h-0 overflow-hidden' : 'h-auto'
            }`}
         >
            <div className='bg-gray-200 p-2 rounded'>
               {question?.description}
            </div>
         </div>
         <QuestionComment
            onClose={handleOnClose}
            visible={showQuestionCommentForm}
         />
      </>
   )
}

export default QuestionInfoHead
