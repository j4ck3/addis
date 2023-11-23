import Nav from '@/components/Nav'
import { Client } from '@/interfaces/Client'
import { NextPage } from 'next'
import React from 'react'

var item:Client = {
    id: 'dds229',
    interviewer: 'John',
    formType: 'ADDIS',
    status: 'Påbörjad',
    dateCreated: '2022-06-07'
}

const InterviewDetails: NextPage = () => {
  return (
    <>
        <Nav />
        <div className="container shadow-md rounded p-4 my-7 mb-4">
            <div className="flex justify-between">
                <div>
                    <span className='fs-2'>UNO-kod: {item.id}</span>
                    <span className='ms-3 text-mute fs-4'>{item.interviewer}, {item.dateCreated}</span>
                </div>
                <div className='space-y-2'>
                    <button className='btn-theme'>Öppna Intervjuv</button>
                    <button className='me-2 btn-theme'>Redigera</button>
                    <button className='btn-theme'>Ta Bort</button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-7 w-full mt-5">
                <div className="col bg-slate-200 p-3 rounded">
                    <div className="flex justify-between">
                        <h3 className='text-lg'>Backgrund</h3>
                        <button className='btn-theme'>Backgrund</button>
                    </div>
                    <p>Sammanfattning och bakgrundsinformation - Utlåtande.</p>
                </div>
                <div className="col bg-slate-200 p-3 rounded">
                    <div className="flex justify-between mb-3">
                        <h3 className='text-lg'>Ämneslista</h3>
                        <button className='btn-theme'>Ämneslista</button>
                    </div>
                    <p>Tar upp de vanligaste preparaten och läkemedlen.</p>
                </div>
                <div className="col bg-slate-200 p-3 rounded">
                    <div className="flex justify-between mb-3">
                        <h3 className='text-lg'>ICD10 Pedagogisk Checklista</h3>
                        <button className='btn-theme'>Checklista</button>
                    </div>
                    <p>Ett hjälpmedel som ger en överblick av de negativa konsekvenser som orsakats av drogen.</p>
                </div>
                <div className="col bg-slate-200 p-3 rounded">
                    <div className="flex justify-between mb-3">
                        <h3 className='text-lg'>Diagnos Checklista</h3>
                        <div className='space-y-2'>
                            <a href='/client/id/diagnos/dsm5/checklist' className='btn-theme'>DSM5</a>
                            <button className='btn-theme'>ICD-10 Beroende</button>
                            <button className='btn-theme'>ICD-10 Skadligt Bruk</button>
                        </div>
                    </div>
                    <p>Sammanställning av resultat och underlag för diagnos.</p>
                </div>
                <div className="col bg-slate-200 p-3 rounded">
                    <div className="flex justify-between mb-3">
                        <h3 className='text-lg'>Diagnos Checklista</h3>
                        <button className='btn-theme'>Backgrund</button>
                    </div>
                    <p>Sammanställning av resultat och underlag för diagnos.</p>
                </div>
            </div>
        </div>
    </>
  )
}
export default InterviewDetails;