'use client'
import { useParams, useRouter } from 'next/navigation'
import { NextPage } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { InterviewSchema } from '@/models/schemas/InterviewSchema'
import { deleteOne, readOne } from '@/services/dynamoDb/interviews'

const InterviewDetails: NextPage = () => {
   const [interview, setInterview] = useState<InterviewSchema | null>(null)
   const params = useParams()
   const router = useRouter()
   const { id } = params

   useEffect(() => {
      const fetchData = async () => {
         const res = await readOne(id as string)
         if (res.data?.id != null && res.data?.id !== '') {
            setInterview(res.data as InterviewSchema)
         }
      }
      fetchData()
   }, [id])

   const handleDelete = async () => {
      const res = await deleteOne(id as string)
      if (res.success) {
         router.push('/interviews')
      }
   }

   //return with error message if interview == null
   if (interview == null) {
      return (
         <div className='flex justify-center m-3 p-3'>
            404 - Could not find an interview with id {id}
         </div>
      )
   }
   return (
      <>
         <div className='container shadow-md rounded p-4 my-7 mb-4'>
            <div className='flex justify-between'>
               <div>
                  <div className='grid grid-cols-2 space-x-6'>
                     <div>
                        <div className='text-2xl font-bold'>
                           UNO-kod: {interview.uno}
                        </div>
                        <div>{interview.created}</div>
                     </div>
                     <div className='flex items-center'>
                        <Link
                           href={`/interviews/edit/${id}`}
                           className='bg-green-500 py-1 px-2 rounded-tl-md rounded-bl-md border-r-2 no-underline text-white'
                        >
                           Redigera
                        </Link>
                        <button
                           onClick={() => handleDelete()}
                           className='bg-red-500 py-1 px-2 rounded-tr-md rounded-br-md no-underline text-white'
                        >
                           Ta Bort
                        </button>
                     </div>
                  </div>
               </div>
               <div></div>
               <div className='space-y-2'>
                  <Link href={`/interview/${id}/question/1`}>
                     Öppna Intervjuv
                  </Link>
               </div>
            </div>
            <div className='grid grid-cols-2 gap-7 w-full mt-5'>
               <div className='col bg-slate-200 p-3 rounded'>
                  <div className='flex justify-between'>
                     <h3 className='text-lg'>Backgrund</h3>
                     <Link href='/client/id/background'>Bakgrund</Link>
                  </div>
                  <p className='text-sm'>
                     Sammanfattning och bakgrundsinformation - Utlåtande.
                  </p>
               </div>
               <div className='col bg-slate-200 p-3 rounded'>
                  <div className='flex justify-between mb-3'>
                     <h3 className='text-lg'>Ämneslista</h3>
                     <Link href='/client/id/substancelist'>Ämneslista</Link>
                  </div>
                  <p className='text-sm'>
                     Tar upp de vanligaste preparaten och läkemedlen.
                  </p>
               </div>
               <div className='col bg-slate-200 p-3 rounded'>
                  <div className='flex justify-between mb-3'>
                     <h3 className='text-lg'>ICD10 Pedagogisk Checklista</h3>
                     <Link href='/client/id/pedagogicchecklist'>
                        Checklista
                     </Link>
                  </div>
                  <p className='text-sm'>
                     Ett hjälpmedel som ger en överblick av de negativa
                     konsekvenser som orsakats av drogen.
                  </p>
               </div>
               <div className='col bg-slate-200 p-3 rounded'>
                  <div className='flex justify-between mb-3'>
                     <h3 className='text-lg'>Diagnos Checklista</h3>
                     <div className='space-y-2 flex flex-col items-center'>
                        <Link href='/client/id/diagnos/dsm5/checklist'>
                           DSM5
                        </Link>
                        <Link href='/client/id/diagnos/icd10/addiction/checklist'>
                           ICD-10 Beroende
                        </Link>
                        <Link href='/client/id/diagnos/icd10/harmfuluse/checklist'>
                           ICD-10 Skadligt Bruk
                        </Link>
                     </div>
                  </div>
                  <p className='text-sm'>
                     Sammanställning av resultat och underlag för diagnos.
                  </p>
               </div>
               <div className='col bg-slate-200 p-3 rounded'>
                  <div className='flex justify-between mb-3'>
                     <h3 className='text-lg'>Beroendekurva</h3>
                     <Link href='/client/id/addictioncurve'>Kurva</Link>
                  </div>
                  <p className='text-sm'>
                     Ger en översikt över olika drogers utbytbarhet och
                     samverkan. Komplement till den pedagogiska checklistan.
                  </p>
               </div>
            </div>
         </div>
      </>
   )
}

export default InterviewDetails
